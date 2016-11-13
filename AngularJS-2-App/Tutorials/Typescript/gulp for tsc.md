# gulp


https://www.typescriptlang.org/docs/handbook/gulp.html


> 本快速入门指南将教您如何使用gulp构建TypeScript，然后将Browserify，uglify或Watchify添加到gulp管道。

本指南还使用Babelify添加了Babel功能。

我们假设你已经使用Node.js和npm。



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














