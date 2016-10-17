# Sass (ruby)

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

[sass-lang](http://sass-lang.com/)
[documentation](http://sass-lang.com/documentation/)
[github](https://github.com/sass/sass)

## tutorial

> If you’re using Windows, you may need to install **Ruby** first.

```sh
>
$ gem install sass
$ sass --help
$ sass input.scss output.css
$ sass --watch input.scss:output.css
$ sass --watch app/sass:public/stylesheets
```


## Gulp plugin for sass

[**Gulp** plugin for sass](https://www.npmjs.com/package/gulp-sass)

```sh
>
$ npm install gulp-sass --save-dev
```

### usage (compile synchronously)

```js
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
```

## node-sass

[node-sass](https://www.npmjs.com/package/node-sass)

```sh
>
$ npm install node-sass
```

### Usage

```js
var sass = require('node-sass');
sass.render({
  file: scss_filename,
  [, options..]
}, function(err, result) { /*...*/ });
// OR 
var result = sass.renderSync({
  data: scss_content
  [, options..]
});
```

