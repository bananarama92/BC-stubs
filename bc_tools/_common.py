import sys
import logging
import contextlib
import types
import time
import subprocess
import functools

from collections.abc import Callable

__all__ = ["logger", "entry_point", "append_docstring"]


class ContextLoggerError(Exception):
    """Error type for :class:`ContextLogger`."""
    pass


class ContextLogger(contextlib.ContextDecorator):
    """
    A reentrant and reusable context decorator for encapsulating things between `::group::`
    and `::endgroup::` print calls for use in GitHub Actions.

    See https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands
    """
    RED = "\033[31m"
    GREEN = "\033[32m"
    COLOR_END = "\033[0m"

    _logger: logging.Logger
    _enter_msg: str
    _start: None | float
    _suppress_error: None | type[Exception]
    _error_callback: None | Callable[[logging.Logger, BaseException], None]

    @property
    def logger(self):
        return self._logger

    def __init__(
        self,
        logger: logging.Logger,
        enter_msg: str,
        /, *,
        suppress_error: None | type[Exception] = None,
        error_callback: None | Callable[[logging.Logger, BaseException], None] = None,
    ) -> None:
        self._logger = logger
        self._enter_msg = enter_msg
        self._start = None
        self._suppress_error = suppress_error
        self._error_callback = error_callback

    def __enter__(self) -> None:
        """Start the `::group::` block."""
        if self._start is not None:
            cls = type(self)
            raise ContextLoggerError(f"{cls.__qualname__!r} is not reentrant")
        else:
            self._start = time.time()
            self.logger.info(f"::group::{self._enter_msg}")

    def __exit__(
        self,
        exc_type: None | type[BaseException],
        exc_value: None | BaseException,
        exc_traceback: None | types.TracebackType,
    ) -> bool:
        """End the `::group::` block via `::endgroup::`."""
        cls = type(self)
        if self._start is None:
            raise ContextLoggerError(f"Invalid {cls.__qualname__!r} state")
        else:
            duration = time.time() - self._start
            self._start = None

        if exc_value is None:
            self.logger.info("::endgroup::")
            self.logger.info(f"{cls.GREEN}✓ {duration:.2f}s{cls.COLOR_END}\n".rjust(78))
            return True
        else:
            if self._error_callback is not None:
                self._error_callback(self.logger, exc_value)
            self.logger.info("::endgroup::")
            self.logger.info(f"{cls.RED}✕ {duration:.2f}s{cls.COLOR_END}\n".rjust(78))
            return (
                self._suppress_error is not None
                and isinstance(exc_value, self._suppress_error)
                and not isinstance(exc_value, ContextLoggerError)
            )


class BCLogger(logging.Logger):
    """A logger with GitHub Actions-specific logging helpers."""
    def log_group(
        self,
        enter_msg: str,
        /, *,
        suppress_error: None | type[Exception] = None,
        error_callback: None | Callable[[logging.Logger, BaseException], None] = None,
    ) -> ContextLogger:
        """Encapsulate the passed context between `::group::` and `::endgroup::` print calls."""
        return ContextLogger(
            self, enter_msg,
            suppress_error=suppress_error, error_callback=error_callback,
        )


logger = BCLogger("bc-stubs", logging.DEBUG)
logger.addHandler(logging.StreamHandler(stream=sys.stdout))


def entry_point[**P](func: Callable[P, None], /) -> Callable[P, None]:
    """A decorator with entry point-specific helping logic."""
    @functools.wraps(func)
    def _wrapper(*args: P.args, **kwargs: P.kwargs) -> None:
        if sys.platform == "win32":
            subprocess.run("color", shell=True, check=False)
        try:
            func(*args, **kwargs)
        except KeyboardInterrupt:
            logger.warning("Aborting: User keyboard interruption")
            sys.exit(130)  # unix exit code for ctrl + C keyboard interruptions
    return _wrapper


def append_docstring[T: Callable[..., object]](docstring: str | None) -> Callable[[T], T]:
    """A decorator factory for appending docstrings to a function."""
    def _factory(func: T) -> T:
        if docstring is None:
            return func
        elif func.__doc__ is None:
            func.__doc__ = docstring
        else:
            func.__doc__ += f"\n{docstring}"
        return func
    return _factory
