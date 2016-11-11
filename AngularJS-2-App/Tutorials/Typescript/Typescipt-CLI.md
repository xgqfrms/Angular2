# Typescipt-CLI

https://www.typescriptlang.org/docs/handbook/compiler-options.html

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://www.typescriptlang.org/docs/tutorial.html


```sh
# INSTALL
$ npm install -g typescript

# COMPILE
$ tsc helloworld.ts

``` 



## Compiler Options

Option  Type  Default  Description

--allowJs
boolean false  Allow JavaScript files to be compiled.

--baseUrl
string  Base directory to resolve non-relative module names. See Module Resolution documentation for more details.

--charset
string  "utf8"  The character set of the input files.

--declaration
-d  boolean false   Generates corresponding ‘.d.ts’ file.

--emitBOM   boolean false   Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.

--emitDecoratorMetadata[1]  boolean false   Emit design-type metadata for decorated declarations in source. See issue #2577 for details.

--experimentalDecorators[1] boolean false   Enables experimental support for ES7 decorators.

--help
-h          Print help message.

--init          Initializes a TypeScript project and creates a tsconfig.json file.


--jsx   string  "Preserve"  Support JSX in ‘.tsx’ files: 'React' or 'Preserve'. See JSX.

--locale    string  (platform specific) The locale to use to show error messages, e.g. en-us.


--module
-m  string  target === 'ES6' ? 'ES6' : 'commonjs'   Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', or 'es2015'.
► Only 'amd' and 'system' can be used in conjunction with --outFile.
► 'es6' and 'es2015' values may not be used when targeting ES5 or lower.


--project 
-p  string      Compile a project given a valid configuration file.



--target
-t  string  "ES3"   Specify ECMAScript target version: 'es3' (default), 'es5', or 'es6'.


--version
-v          Print the compiler’s version.

--watch
-w          Run the compiler in watch mode. Watch input files and trigger recompilation on changes.


[1] These options are experimental.
[2] These options are only allowed in tsconfig.json, and not through command-line switches.

Related

Setting compiler options in tsconfig.json files.
Setting compiler options in MSBuild projects.


































