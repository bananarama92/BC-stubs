"""
Sanitize any nested functions, turning the likes of `foo: function foo()` and `foo: function()` into `foo()`.

Used as a crutch for getting typescript to include docstrings in namespace-embedded functions
(xref https://github.com/bananarama92/BC-stubs/issues/18).

"""

from __future__ import annotations

import argparse
import itertools
import os
import re

PATTERN = re.compile(r"([a-zA-Z0-9_]+)\: function( )?([a-zA-Z0-9_]+)?( )?\(")


def _replacer(match: re.Match[str]) -> str:
    groups = match.groups()
    if (groups[2] is None or groups[2] == groups[0]):
        return f"{match.groups()[0]}("
    else:
        return ""


def main(root: str | os.PathLike[str]) -> None:
    file_iter = itertools.chain.from_iterable(
        [os.path.join(root, i) for i in files if i.endswith(".js")]
        for (root, _, files) in os.walk(root)
    )

    for path in file_iter:
        with open(path, "r", encoding="utf8") as f_inp:
            text_inp = f_inp.read()

        text_out = PATTERN.sub(_replacer, text_inp)
        if text_inp != text_out:
            with open(path, "w", encoding="utf8") as f_out:
                f_out.write(text_out)


if __name__ == "__main__":
    description = None if __doc__ is None else __doc__.splitlines()[1]
    parser = argparse.ArgumentParser(
        usage="python ./namespace_function_sanitize.py ./BondageClub",
        description=description,
    )
    parser.add_argument("path", help="Path to the BC root directory")
    args = parser.parse_args()
    main(args.path)
