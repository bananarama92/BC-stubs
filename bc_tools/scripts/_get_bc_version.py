"""A script for etxracting the BC version from the passed BC `index.html` file."""

import re
import argparse

from ..utils import entry_point, append_docstring

__all__ = ["main"]

PATTERN = re.compile(r'GameVersion = "(?P<version>R[0-9]+)(?P<suffix>(Alpha|Beta)([0-9]+)?)?"')


def get_bc_version(filename: str) -> str:
    """Main function."""
    with open(filename, "r", encoding="utf8") as f:
        for i in f:
            if match := PATTERN.search(i):
                group_dict = match.groupdict()
                suffix = group_dict['suffix'] if group_dict['suffix'] is not None else ""
                return f"{group_dict['version']}{suffix}"
    return "UNKNOWN"


@entry_point
@append_docstring(__doc__)
def main():
    parser = argparse.ArgumentParser(usage="bc_tools.get_bc_version Scripts/Game.js", description=__doc__)
    parser.add_argument("path", help="Path to the BC index.html file")
    args = parser.parse_args();
    print(get_bc_version(args.path))


if __name__ == "__main__":
    main()
