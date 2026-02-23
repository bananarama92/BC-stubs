"""
Remove all mentions of `@private` and `@protected` from the .js/.ts files in the passed directory.

Used as a crutch for dealing with TS's lack of support for aforementioned JSDoc tags in combination
with anonymous classes (xref https://github.com/microsoft/TypeScript/issues/30355).

"""

from __future__ import annotations

import argparse
import itertools
import os


def main(root: str | os.PathLike[str]) -> None:
    file_iter = itertools.chain.from_iterable(
        [os.path.join(dir_path, i) for i in files if (i.endswith(".js") or i.endswith(".ts"))]
        for (dir_path, _, files) in os.walk(root)
    )

    for path in file_iter:
        with open(path, "r", encoding="utf8") as f_inp:
            text_inp = f_inp.read()
        if ("@protected" in text_inp or "@private" in text_inp):
            with open(path, "w", encoding="utf8") as f_out:
                f_out.write(text_inp.replace("@protected", "protected").replace("@private", "private"))


if __name__ == "__main__":
    description = None if __doc__ is None else __doc__.splitlines()[1]
    parser = argparse.ArgumentParser(
        usage="python ./remove_private_protected.py ./BondageClub",
        description=description,
    )
    parser.add_argument("path", help="Path to the BC root directory")
    args = parser.parse_args()
    main(args.path)
