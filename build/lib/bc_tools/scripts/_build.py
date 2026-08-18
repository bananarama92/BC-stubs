"""Generate Typescript declaration files from BC."""

import argparse
import os
import shutil
import pathlib
import subprocess
import itertools
import re
import pprint
import logging

from collections.abc import Generator

from bc_tools import logger, entry_point, append_docstring

__all__ = ["main"]

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


def _replacer(match: re.Match[str]) -> str:
    """See :func:`namespace_function_sanitize`."""
    return f"{match.groups()[0]}("


@logger.log_group("Removing explicit 'function' keywords from namespace-embedded functions")
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
                logger.info(f"Function style sanitizing {path!r}")
                f_out.write(text_out)


@logger.log_group("Removing JSDoc '@private' and '@protected' tags")
def remove_private_protected(bc_root: pathlib.Path) -> None:
    """
    Get rid of JSDoc @private/@protected comments as TS lacks support for those in anonymous classes because... reasons?

    Xref https://github.com/microsoft/TypeScript/issues/30355
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
                logger.info(f"JSDoc tag sanitizing {path!r}")
                f_out.write(text_inp.replace("@protected", "protected").replace("@private", "private"))


def _get_d_ts_iter(root: pathlib.Path) -> Generator[tuple[pathlib.Path, str], None, None]:
    """Iterate over the passed directory and yield pairs of (relative) directories and `.d.ts` files."""
    for (_dir, _, files) in os.walk(root):
        dir = pathlib.Path(_dir).relative_to(root)
        if not any(dir.is_relative_to(i) for i in DIRECTORY_INCLUDE):
            continue
        elif any(dir.is_relative_to(i) for i in DIRECTORY_EXCLUDE):
            continue
        yield from ((dir, f) for f in files if f.endswith(".d.ts") and not any((dir / f).match(i) for i in FILE_EXCLUDE))


@logger.log_group("Copy pre-existing typescript files")
def copy_ts_declarations(bc_root: pathlib.Path, bc_stubs_root: pathlib.Path):
    """Copy `tsconfig.json` and all pre-existing BC `*.d.ts` files."""
    src = bc_stubs_root / "data"/ "_tsconfig.json"
    target = bc_root / "tsconfig.json"
    logger.info(f"Coppying {os.fspath(src)!r} to {os.fspath(target)!r}")
    shutil.copy2(src, bc_root / "tsconfig.json")

    for (relative_dir, file) in _get_d_ts_iter(bc_root):
        src = bc_root / relative_dir / file
        target_dir = bc_root / "dist" / "NativeDeclarations" / relative_dir
        target = target_dir / file
        logger.info(f"Coppying {os.fspath(src)!r} to {os.fspath(target)!r}")
        os.makedirs(target_dir, exist_ok=True)
        shutil.copy2(src, target)


def _ts_log_callback(log: logging.Logger, exc: BaseException) -> None:
    """Log `tsc` errors to the stdout."""
    if (isinstance(exc, subprocess.CalledProcessError) and isinstance(exc.output, str)):
        pattern = re.compile("Found \\d+ errors")
        msg = next((f": {i.strip()}" for i in exc.output.split("\n") if re.search(pattern, i) is not None), "")
        logger.info(exc.output)
        logger.warning(
            "::warning::Error encountered while running Typescript with "
            f"exit status {str(exc.returncode)!r}{msg}",
        )


@logger.log_group(
    "Generate Typescript declarations",
    suppress_error=subprocess.CalledProcessError,
    error_callback=_ts_log_callback,
)
def generate_ts_declarations(bc_root: pathlib.Path, bc_stubs_root: pathlib.Path):
    """Generate all BC Typescript declaration files."""
    ts_path = os.fspath(bc_stubs_root.parent / "node_modules" / "typescript")
    output = subprocess.check_output(
        f"npx -p {ts_path} tsc", shell=True, cwd=bc_root, stderr=subprocess.STDOUT, encoding="utf8"
    )
    logger.info(output)
    logger.info("::notice::No errors encountered while running Typescript")


@append_docstring(__doc__)
def build(bc_root: str | os.PathLike[str], bc_stubs_root: str | os.PathLike[str]) -> None:
    bc_root = pathlib.Path(bc_root)
    bc_stubs_root = pathlib.Path(bc_stubs_root)

    # Prepare dist
    with logger.log_group(f"Preparing directories"):
        logger.info(f"BC root directory: {os.path.abspath(bc_root)!r}")
        logger.info(f"BC-Stubs root directory: {os.path.abspath(bc_stubs_root)!r}")

        bc_directories = DIRECTORY_INCLUDE
        missing_bc = sorted(i for i in bc_directories if not os.path.isdir(bc_root / i))
        if missing_bc:
            raise FileNotFoundError(
                f"Failed to find the following expected BC directories in {os.fspath(bc_root)!r}: "
                f"{pprint.pformat(missing_bc)}",
            )

        bc_stubs_directories = {"data"}
        missing_bc_stubs = sorted(i for i in bc_stubs_directories if not os.path.isdir(bc_stubs_root / i))
        if missing_bc_stubs:
            raise FileNotFoundError(
                f"Failed to find the following expected BC-Stubs directories in {os.fspath(bc_stubs_root)!r}: "
                f"{pprint.pformat(missing_bc_stubs)}",
            )

        if os.path.exists(bc_root / "dist"):
            logger.info(f"Emptying pre-existing BC {os.fspath(bc_root / "dist")!r} directory")
            shutil.rmtree(bc_root / "dist")
        os.makedirs(bc_root / "dist" / "NativeDeclarations")

    # Copy files
    copy_ts_declarations(bc_root, bc_stubs_root)

    # TS-related fixups
    remove_private_protected(bc_root)
    namespace_function_sanitize(bc_root)

    # Run TS
    generate_ts_declarations(bc_root, bc_stubs_root)


@entry_point
@append_docstring(__doc__)
def main():
    """Main entrypoint."""
    parser = argparse.ArgumentParser(usage="python ./build.py BondageClub", description=__doc__)
    parser.add_argument("bc_root", help="Path to BC")
    parser.add_argument("--bc_stubs_root", default=None, help="Path to BC-Stubs")
    bc_stubs_fallback = pathlib.Path(os.path.realpath(__file__)).parent.parent
    args = parser.parse_args();
    build(
        args.bc_root,
        args.bc_stubs_root if args.bc_stubs_root is not None else bc_stubs_fallback,
    )


if __name__ == "__main__":
    main()
