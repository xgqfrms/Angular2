#  webpack compare with gulp !

[webpack-for-browserify-users](http://webpack.github.io/docs/webpack-for-browserify-users.html)

[一小时包教会 —— webpack 入门指南](http://www.cnblogs.com/vajoy/p/4650467.html)


[webpack](https://webpack.github.io/)


```sh
$ npm install browser-sync gulp --save-dev

``` 
## gulpfile.js
```js
	var gulp = require('gulp');
	var browserSync = require('browser-sync').create();

	// Static server
	gulp.task('browser-sync', function() {
	    browserSync.init({
	        server: {
	            baseDir: "./"
	        }
	    });
	});
``` 
> or

```js
	var gulp = require('gulp');
	var browserSync = require('browser-sync').create();

	gulp.task('browser-sync', function() {
	    browserSync.init({
	        proxy: "yourlocal.dev"
	    });
	});
``` 













