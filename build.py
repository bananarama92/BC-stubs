"""Generate Typescript declaration files from BC."""

from __future__ import annotations

import argparse
import os
import shutil
import pathlib
import subprocess
import itertools
import re
import contextlib
import time
import types
import math
import sys
import logging
import pprint

FILE_EXCLUDE = frozenset({
    "Scripts/MessagesPatch.d.ts",
    "Scripts/DeclarationsExpensive.d.ts",
})

DIRECTORY_EXCLUDE = frozenset({
    "Screens/MiniGame/KinkyDungeon",
})

DIRECTORY_INCLUDE = frozenset({
    "Assets",
    "Audio",
    "Backgrounds",
    "Icons",
    "Screens",
    "Scripts",
})

STDOUT_HANDLER = logging.StreamHandler(stream=sys.stdout)
STDOUT_HANDLER.setFormatter(logging.Formatter(fmt="%(message)s"))
STDOUT_HANDLER.setLevel(logging.DEBUG)

LOGGER = logging.getLogger("bc-stubs")
LOGGER.setLevel(logging.DEBUG)
LOGGER.addHandler(logging.StreamHandler(stream=sys.stdout))


class Log(contextlib.AbstractContextManager["Log"]):
    RED = "\033[31m"
    GREEN = "\033[32m"
    COLOR_END = "\033[0m"

    _enter_msg: str
    _start: float
    _suppress_error: None | type[Exception]

    def __init__(
        self,
        enter_msg: str,
        /, *,
        suppress_error: None | type[Exception] = None,
    ) -> None:
        self._enter_msg = enter_msg
        self._start = math.nan
        self._suppress_error = suppress_error

    def __enter__(self) -> Log:
        self._start = time.time()
        self.info(f"::group::{self._enter_msg}")
        return self

    def __exit__(
        self,
        exc_type: None | type[BaseException],
        exc_value: None | BaseException,
        exc_traceback: None | types.TracebackType,
    ) -> bool:
        cls = type(self)
        duration = time.time() - self._start

        if exc_value is None:
            self.info("::endgroup::")
            self.info(f"{cls.GREEN}✓ {duration:.2f}s{cls.COLOR_END}\n".rjust(78))
            return True
        else:
            if (isinstance(exc_value, subprocess.CalledProcessError) and isinstance(exc_value.output, str)):
                match = re.search("Found \\d+ errors in \\d+ files", exc_value.output)
                msg = match.group(0) if match is not None else ""
                self.info(exc_value.output)
                self.warning(
                    "::warning::Error encountered while running Typescript with "
                    f"exit status '{exc_value.returncode}': {msg}",
                )
            self.info("::endgroup::")
            self.info(f"{cls.RED}✕ {duration:.2f}s{cls.COLOR_END}\n".rjust(78))
            return self._suppress_error is not None and isinstance(exc_value, self._suppress_error)

    def info(self, message: str) -> None:
        LOGGER.info(message)

    def warning(self, message: str) -> None:
        LOGGER.warning(message)


def _replacer(match: re.Match[str]) -> str:
    return f"{match.groups()[0]}("


def namespace_function_sanitize(bc_root: pathlib.Path) -> None:
    """
    Convert namespace-embedded functions into proper methods so that TS actually picks up their docstrings.

    xref https://github.com/bananarama92/BC-stubs/issues/18
    """
    file_iter = itertools.chain.from_iterable(
        [os.path.join(root, i) for i in files if i.endswith(".js")]
        for dir in DIRECTORY_INCLUDE
        for (root, _, files) in os.walk(bc_root / dir)
    )

    pattern = re.compile(r"([a-zA-Z0-9_]+)\:(\s+)?function(\s+)?([a-zA-Z0-9_]+)?(\s+)?\(")
    for path in file_iter:
        with open(path, "r", encoding="utf8") as f_inp:
            text_inp = f_inp.read()

        text_out = pattern.sub(_replacer, text_inp)
        if text_inp != text_out:
            with open(path, "w", encoding="utf8", newline="\n") as f_out:
                LOGGER.info(f"Sanitizing {path!r}")
                f_out.write(text_out)


def remove_private_protected(bc_root: pathlib.Path) -> None:
    """
    Get rid of JSDoc @private/@protected comments as TS lacks support for those in anonymous classes because... reasons?

    Xref https://github.com/microsoft/TypeScript/issues/30355)
    """
    file_iter = itertools.chain.from_iterable(
        [os.path.join(dir_path, i) for i in files if (i.endswith(".js") or i.endswith(".ts"))]
        for dir in DIRECTORY_INCLUDE
        for (dir_path, _, files) in os.walk(bc_root / dir)
    )

    for path in file_iter:
        with open(path, "r", encoding="utf8") as f_inp:
            text_inp = f_inp.read()
        if ("@protected" in text_inp or "@private" in text_inp):
            with open(path, "w", encoding="utf8", newline="\n") as f_out:
                LOGGER.info(f"Sanitizing {path!r}")
                f_out.write(text_inp.replace("@protected", "protected").replace("@private", "private"))


def main(bc_root: str | os.PathLike[str], bc_stubs_root: str | os.PathLike[str]) -> None:
    bc_root = pathlib.Path(bc_root)
    bc_stubs_root = pathlib.Path(bc_stubs_root)

    missing_bc = sorted(i for i in DIRECTORY_INCLUDE if not os.path.isdir(bc_root / i))
    if missing_bc:
        raise FileNotFoundError(
            f"Failed to find the following expected BC directories in {os.fspath(bc_root)!r}: "
            f"{pprint.pformat(missing_bc)}",
        )

    missing_bc_stubs = sorted(i for i in [".github"] if not os.path.isdir(bc_stubs_root / i))
    if missing_bc_stubs:
        raise FileNotFoundError(
            f"Failed to find the following expected BC-Stubs directories in {os.fspath(bc_stubs_root)!r}: "
            f"{pprint.pformat(missing_bc_stubs)}",
        )

    # Prepare dist
    with Log(f"Preparing {os.fspath(bc_root / "dist")!r} directory"):
        if os.path.exists(bc_root / "dist"):
            shutil.rmtree(bc_root / "dist")
        os.makedirs(bc_root / "dist" / "NativeDeclarations")

    # Copy files
    with Log("Copy pre-existing typescript files") as log:
        log.info(f"Coppying {os.fspath(bc_stubs_root / ".github"/ "tsconfig.json")!r}")
        shutil.copy2(bc_stubs_root / ".github"/ "tsconfig.json", bc_root / "tsconfig.json")
        for (_dir, _, files) in os.walk(bc_root):
            dir = pathlib.Path(_dir).relative_to(bc_root)
            if not any(dir.is_relative_to(i) for i in DIRECTORY_INCLUDE):
                continue
            elif any(dir.is_relative_to(i) for i in DIRECTORY_EXCLUDE):
                continue
            for f in files:
                if f.endswith(".d.ts") and not any((dir / f).match(i) for i in FILE_EXCLUDE):
                    log.info(f"Coppying {os.fspath(bc_root / dir / f)!r}")
                    os.makedirs(bc_root / "dist" / "NativeDeclarations" / dir, exist_ok=True)
                    shutil.copy2(bc_root / dir / f, bc_root / "dist" / "NativeDeclarations" / dir / f)

    # TS-related fixups
    with Log("Removing JSDoc '@private' and '@protected' tags"):
        remove_private_protected(bc_root)
    with Log("Removing explicit 'function' keywords from namespace-embedded functions"):
        namespace_function_sanitize(bc_root)

    # Run TS
    with Log("Running Typescript", suppress_error=subprocess.CalledProcessError) as log:
        ts_path = os.fspath(bc_stubs_root / "node_modules" / "typescript")
        output = subprocess.check_output(
            f"npx -p {ts_path} tsc", shell=True, cwd=bc_root, stderr=subprocess.STDOUT, encoding="utf8"
        )
        log.info(output)
        log.info("::notice::No errors encountered while running Typescript")


if __name__ == "__main__":
    if sys.platform == 'win32':
        subprocess.run("color", shell=True, check=False)

    parser = argparse.ArgumentParser(usage="python ./build.py BondageClub", description=__doc__)
    parser.add_argument("bc_root", help="Path to BC")
    parser.add_argument("--bc_stubs_root", default=None, help="Path to BC-Stubs")
    args = parser.parse_args()
    bc_stubs_fallback = os.path.dirname(os.path.realpath(__file__))
    try:
        main(
            args.bc_root,
            args.bc_stubs_root if args.bc_stubs_root is not None else bc_stubs_fallback,
        )
    except KeyboardInterrupt:
        LOGGER.warning("Aborting: User interruption")
