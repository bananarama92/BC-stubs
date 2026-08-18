import pathlib

__all__ = ["tsconfig"]

_root = pathlib.Path(__file__).parent
tsconfig = _root / "_tsconfig.json"

del _root, pathlib
