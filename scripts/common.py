from __future__ import annotations

import sys
import logging
import contextlib
import math
import types
import time

from collections.abc import Callable

__all__ = ["Log", "LOGGER"]

STDOUT_HANDLER = logging.StreamHandler(stream=sys.stdout)
STDOUT_HANDLER.setFormatter(logging.Formatter(fmt="%(message)s"))
STDOUT_HANDLER.setLevel(logging.DEBUG)

LOGGER = logging.getLogger("bc-stubs")
LOGGER.setLevel(logging.DEBUG)
LOGGER.addHandler(logging.StreamHandler(stream=sys.stdout))


class Log(contextlib.AbstractContextManager["Log"]):
    RED = "\033[31m"
    GREEN = "\033[32m"
    COLOR_END = "\033[0m"

    _enter_msg: str
    _start: float
    _suppress_error: None | type[Exception]
    _error_callback: None | Callable[[Log, BaseException], None]

    def __init__(
        self,
        enter_msg: str,
        /, *,
        suppress_error: None | type[Exception] = None,
        error_callback: None | Callable[[Log, BaseException], None] = None,
    ) -> None:
        self._enter_msg = enter_msg
        self._start = math.nan
        self._suppress_error = suppress_error
        self._error_callback = error_callback

    def __enter__(self) -> Log:
        self._start = time.time()
        self.info(f"::group::{self._enter_msg}")
        return self

    def __exit__(
        self,
        exc_type: None | type[BaseException],
        exc_value: None | BaseException,
        exc_traceback: None | types.TracebackType,
    ) -> bool:
        cls = type(self)
        duration = time.time() - self._start

        if exc_value is None:
            self.info("::endgroup::")
            self.info(f"{cls.GREEN}✓ {duration:.2f}s{cls.COLOR_END}\n".rjust(78))
            return True
        else:
            if self._error_callback is not None:
                self._error_callback(self, exc_value)
            self.info("::endgroup::")
            self.info(f"{cls.RED}✕ {duration:.2f}s{cls.COLOR_END}\n".rjust(78))
            return self._suppress_error is not None and isinstance(exc_value, self._suppress_error)

    def info(self, message: str) -> None:
        LOGGER.info(message)

    def warning(self, message: str) -> None:
        LOGGER.warning(message)

    def error(self, message: str) -> None:
        LOGGER.error(message)
