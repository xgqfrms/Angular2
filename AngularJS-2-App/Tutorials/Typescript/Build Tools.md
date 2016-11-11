# Integrating with Build Tools

https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html

## Browserify

```sh
# Install
$ npm install tsify

# Using Command Line Interface
$ browserify main.ts -p [ tsify --noImplicitAny ] > bundle.js
``` 

> Using API

```js
var browserify = require("browserify");
var tsify = require("tsify");

browserify()
    .add("main.ts")
    .plugin("tsify", { noImplicitAny: true })
    .bundle()
    .pipe(process.stdout);
``` 



## Grunt

```sh
#Install
$ npm install grunt-ts
``` 

> Basic Gruntfile.js
```js
module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**/*.ts"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
``` 


## gulp
```sh
#Install
$ npm install gulp-typescript
``` 

> Basic gulpfile.js

```js
var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task("default", function () {
    var tsResult = gulp.src("src/*.ts")
        .pipe(ts({
              noImplicitAny: true,
              out: "output.js"
        }));
    return tsResult.js.pipe(gulp.dest("built/local"));
});
``` 




## webpack

```sh
#Install
$ npm install ts-loader --save-dev
``` 

> Basic webpack.config.js

```js
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}

``` 


