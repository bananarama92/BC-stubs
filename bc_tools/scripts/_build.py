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
import collections

from collections.abc import Generator, Iterable, Iterator

from .. import data as paths
from ..utils import logger, entry_point, append_docstring

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
def copy_ts_declarations(bc_root: pathlib.Path):
    """Copy `tsconfig.json` and all pre-existing BC `*.d.ts` files."""
    src = paths.tsconfig
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


ts_stdout_pattern = re.compile(r"(?P<file>[^\(]+)\((?P<lineno>[0-9]+),(?P<colno>[0-9]+)\): error (?P<errcode>[^\:]+):(?P<message>.+)")


def _parse_ts_stdout_line(line: str, root_url: str) -> tuple[str | None, str]:
    match = ts_stdout_pattern.match(line)
    if match is None:
        return (None, line)

    dct = match.groupdict()
    url = f"{root_url}/{dct["file"]}#L{dct["lineno"]}"
    return (dct["file"], f"[TS{dct["errcode"]}]({url}):{dct["message"]}")


def _key_sorter(items: tuple[str | None, object]):
    # Sort None as a max-size unicode string
    key = items[0]
    return chr(0x10ffff) if key is None else key


def _parse_ts_stdout(lines: Iterable[str], root_url: str) -> Iterator[str]:
    dct: dict[str | None, list[str]] = collections.defaultdict(list)
    for i in lines:
        i = i.replace("'", "`").strip()
        if not i:
            continue
        (key, value) = _parse_ts_stdout_line(i, root_url)
        dct[key].append(value)

    for (k, v) in sorted(dct.items(), key=_key_sorter):
        if k is None:
            continue
        yield "> <details open>\n"
        yield f"> <summary><h3>{k}</h3></summary>\n"
        yield ">\n"
        for i in v:
            yield f"> * {i}\n"
        yield "> </details>\n"


def _ts_log_callback(log: logging.Logger, exc: BaseException, root_url: str, comment_path: None | pathlib.Path) -> None:
    """Log `tsc` errors to the stdout."""
    if (isinstance(exc, subprocess.CalledProcessError) and isinstance(exc.output, str)):
        pattern = re.compile("Found \\d+ errors")
        output = re.sub(r"\033\[\d+m\S+\033\[0m", "", exc.output)
        msg = next((f": {i.strip()}" for i in output.split("\n") if re.search(pattern, i) is not None), "")
        summary = f"Error encountered while running Typescript with exit status {str(exc.returncode)!r}{msg}"

        log.info(exc.output)
        log.warning(summary.replace("'", "`"))
        if comment_path is not None:
            with open(comment_path, "w", encoding="utf8") as f:
                f.write("> [!WARNING]\n")
                f.write("> <details>\n")
                f.write(f"> <summary><b>{summary}</b></summary>\n")
                f.write(">\n")
                for i in _parse_ts_stdout(output.split("\n"), root_url):
                    f.write(i)
                f.write("> </details>\n")


def generate_ts_declarations(
    bc_root: pathlib.Path,
    ts_root: pathlib.Path,
    root_url: str,
    comment_path: None | pathlib.Path = None,
):
    """Generate all BC Typescript declaration files."""
    with logger.log_group(
        "Generate Typescript declarations",
        suppress_error=subprocess.CalledProcessError,
        error_callback=lambda log, exc: _ts_log_callback(log, exc, root_url, comment_path),
    ):
        output = subprocess.check_output(
            f"npx -p {os.path.abspath(ts_root)} tsc",
            shell=True,
            cwd=os.path.abspath(bc_root),
            stderr=subprocess.STDOUT,
            encoding="utf8",
        )
        logger.info(output)
        logger.info("::notice::No errors encountered while running Typescript")
        if comment_path is not None:
            with open(comment_path, "w", encoding="utf8") as f:
                f.write("> [!NOTE]")
                f.write("> No errors encountered while running Typescript")


@logger.log_group("Preparing directories")
def prepare_directories(bc_root: pathlib.Path, ts_root: pathlib.Path):
    logger.info(f"BC root directory: {os.path.abspath(bc_root)!r}")
    logger.info(f"Typescript root directory: {os.path.abspath(ts_root)!r}")

    bc_directories = DIRECTORY_INCLUDE
    missing_bc = sorted(i for i in bc_directories if not os.path.isdir(bc_root / i))
    if missing_bc:
        raise FileNotFoundError(
            f"Failed to find the following expected BC directories in {os.fspath(bc_root)!r}: "
            f"{pprint.pformat(missing_bc)}",
        )

    if not os.path.isdir(ts_root):
        raise FileNotFoundError(
            f"Failed to find the TypeScript root directory in {os.fspath(bc_root)!r}",
        )

    if os.path.exists(bc_root / "dist"):
        logger.info(f"Emptying pre-existing BC {os.fspath(bc_root / "dist")!r} directory")
        shutil.rmtree(bc_root / "dist")
    os.makedirs(bc_root / "dist" / "NativeDeclarations")


def build(
    bc_root: str | os.PathLike[str],
    ts_root: str | os.PathLike[str],
    root_url: None | str = None,
    commit_hash: None | str = None,
    comment_output: None | str | os.PathLike[str] = None,
) -> None:
    """Main function."""
    bc_root = pathlib.Path(bc_root)
    ts_root = pathlib.Path(ts_root)
    comment_output = None if comment_output is None else pathlib.Path(comment_output)
    if root_url is not None and commit_hash is not None:
        root_url_strip = root_url.replace(".git", "")
        root_url = f"{root_url_strip}/-/blob/{commit_hash}/BondageClub"
    elif root_url is None:
        root_url = "'"

    # Prepare directories
    prepare_directories(bc_root, ts_root)

    # Copy files
    copy_ts_declarations(bc_root)

    # TS-related fixups
    remove_private_protected(bc_root)
    namespace_function_sanitize(bc_root)

    # Run TS
    generate_ts_declarations(bc_root, ts_root, root_url, comment_output)


@entry_point
@append_docstring(__doc__)
def main():
    parser = argparse.ArgumentParser(usage="bc_tools.build /BondageClub /node_modules/typescript", description=__doc__)
    parser.add_argument("bc_root", help="Path to BC")
    parser.add_argument("typescript_root", help="Path to typescript (e.g. 'node_modules/typescript')")
    parser.add_argument("root_url", help="Root URL to the BC repo", default=None)
    parser.add_argument("commit_hash", help="Root URL to the BC repo", default=None)
    parser.add_argument("comment_output", help="Path to the .md file for creating a Github bot comment", default=None)
    args = parser.parse_args()
    build(args.bc_root, args.typescript_root, args.root_url, args.commit_hash, args.comment_output)


if __name__ == "__main__":
    main()
