import argparse
import sys
import subprocess

from common import Log, LOGGER

__all__ = []


def error_callback(log: Log, exc: BaseException) -> None:
    if (isinstance(exc, subprocess.CalledProcessError) and isinstance(exc.output, str)):
        log.info(exc.output)
        msg_list = [i for _i in exc.output.splitlines() if (i := _i.strip())]
        if msg_list:
            log.error(f"::error::exit status '{exc.returncode}': {msg_list[-1]}")
            sys.exit(exc.returncode);


def main(repo: str, branch: str):
    with Log(
        f"Cloning {repo!r} at branch {branch!r}",
        error_callback=error_callback,
    ) as log:
        output = subprocess.check_output(
            f"git clone {repo} --depth=1 --branch={branch}", shell=True, stderr=subprocess.STDOUT, encoding="utf8"
        )
        log.info(output)


if __name__ == "__main__":
    if sys.platform == 'win32':
        subprocess.run("color", shell=True, check=False)

    parser = argparse.ArgumentParser(usage="python ./clone.py", description=__doc__)
    parser.add_argument("repo", help="Repo URL")
    parser.add_argument("branch", help="Repo branch")
    args = parser.parse_args()
    try:
        main(args.repo, args.branch)
    except KeyboardInterrupt:
        LOGGER.warning("Aborting: User interruption")
