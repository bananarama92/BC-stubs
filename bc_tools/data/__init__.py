import pathlib

__all__ = ["tsconfig_declarations", "tsconfig_typecheck"]

_root = pathlib.Path(__file__).parent
tsconfig_declarations = _root / "_tsconfig_declarations.json"
tsconfig_typecheck = _root / "_tsconfig_typecheck.json"

del _root, pathlib
