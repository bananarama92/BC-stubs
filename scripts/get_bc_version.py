"""A script for etxracting the BC version from the passed BC ``index.html`` file."""

import re
import argparse

PATTERN = re.compile(r'GameVersion = "(?P<version>R[0-9]+)(?P<suffix>(Alpha|Beta)([0-9]+)?)?"')

def main(filename: str) -> str:
    with open(filename, "r", encoding="utf8") as f:
        for i in f:
            if match := PATTERN.search(i):
                group_dict = match.groupdict()
                suffix = group_dict['suffix'] if group_dict['suffix'] is not None else ""
                return f"{group_dict['version']}{suffix}"
    return "UNKNOWN"

if __name__ == "__main__":
    parser = argparse.ArgumentParser(usage="python ./get_bc_version.py Scripts/Game.js", description=__doc__)
    parser.add_argument("path", help="Path to the BC index.html file")
    args = parser.parse_args()
    print(main(args.path))
