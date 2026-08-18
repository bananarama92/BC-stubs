"""Git (shallow) clone the specified repo and branch."""

import argparse
import sys
import subprocess
import logging

from bc_tools import logger, entry_point, append_docstring

__all__ = ["main"]


def error_callback(log: logging.Logger, exc: BaseException) -> None:
    if (isinstance(exc, subprocess.CalledProcessError) and isinstance(exc.output, str)):
        logger.info(exc.output)
        msg_list = [i for _i in exc.output.splitlines() if (i := _i.strip())]
        if msg_list:
            log.error(f"::error::exit status '{exc.returncode}': {msg_list[-1]}")
            sys.exit(exc.returncode);


def clone(repo: str, branch: str):
    """Main function."""
    with logger.log_group(
        f"Cloning {repo!r} at branch {branch!r}",
        error_callback=error_callback,
    ):
        output = subprocess.check_output(
            f"git clone {repo} --depth=1 --branch={branch}", shell=True, stderr=subprocess.STDOUT, encoding="utf8"
        )
        logger.info(output)


@entry_point
@append_docstring(__doc__)
def main():
    parser = argparse.ArgumentParser(usage="python ./clone.py", description=__doc__)
    parser.add_argument("repo", help="Repo URL")
    parser.add_argument("branch", help="Repo branch")
    args = parser.parse_args();
    clone(args.repo, args.branch)


if __name__ == "__main__":
    main()
