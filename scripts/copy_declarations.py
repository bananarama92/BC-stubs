from __future__ import annotations

import os
import pathlib
import shutil
import argparse
from collections.abc import Iterable


def is_subpath(super_path: pathlib.Path, sub_path: pathlib.Path) -> bool:
    try:
        idx = super_path.parts.index(sub_path.parts[0])
    except (ValueError, IndexError):
        return False
    else:
        return super_path.parts[idx:idx + len(sub_path.parts)] == sub_path.parts


def main(
    input_path: str | os.PathLike[str],
    output_path: str | os.PathLike[str],
    ignore: None | Iterable[str | os.PathLike[str]] = None
) -> None:
    input_path = pathlib.Path(os.path.abspath(input_path))
    output_path = pathlib.Path(os.path.abspath(output_path))
    ignore_path = [] if ignore is None else [pathlib.Path(i) for i in ignore]
    for (_root, _, files) in os.walk(input_path):
        root = pathlib.Path(_root)
        for f in files:
            if f.endswith(".d.ts") and not any(is_subpath(root, i) for i in ignore_path):
                new_root = output_path / root.relative_to(input_path)
                os.makedirs(new_root, exist_ok=True)
                shutil.copy2(root / f, new_root / f"_{f}")
                os.rename(root / f, root / f"_{f}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(usage="python ./copy_declarations.py Scripts/Game.js", description=__doc__)
    parser.add_argument("input", help="input directory")
    parser.add_argument("output", help="output directory")
    parser.add_argument("--ignore", nargs="*", help="to-be ignored directories")
    args = parser.parse_args()
    main(args.input, args.output, args.ignore)
