#  JSX & tsconfig.json

## React & preserve

TypeScript ships with two JSX modes: preserve and react.


http://www.typescriptlang.org/docs/handbook/jsx.html

http://www.typescriptlang.org/docs/handbook/tsconfig-json.html

http://json.schemastore.org/tsconfig


```pre
If a segment of a glob pattern includes only * or .*, then only files with supported extensions are included (e.g. .ts, .tsx, and .d.ts by default with .js and .jsx if allowJs is set to true).

If the "files" and "include" are both left unspecified, the compiler defaults to including all TypeScript (.ts, .d.ts and .tsx) files in the containing directory and subdirectories except those excluded using the "exclude" property. JS files (.js and .jsx) are also included if allowJs is set to true. If the "files" or "include" properties are specified, the compiler will instead include the union of the files included by those two properties. Files in the directory specified using the "outDir" compiler option are always excluded unless explicitly included via the "files" property (even when the “exclude” property is specified).
``` 

## JSON Schema Store

http://schemastore.org/json/

JSON Schemas are available for the following 90 files:

