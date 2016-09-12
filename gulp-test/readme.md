# gulp 使用教程 jade

*** 
*** 
## 1. 手动创建 src/templates/index.jade  

## 2. 手动编辑 index.jade
```jade
	doctype html
	html
		head
			title hello jade & gulp
		body
			h1 we used jade to generate this
			p it seems like it works! :)
``` 

## 3. 手动创建 package.json 
### (CMD 自动创建 npm init) 可以手动设置 package.json 的详细内容！ 
```json
	{
		
	}
``` 

## 4. CMD 安装 npm install --save-dev gulp 
```sh
	$ pm install --save-dev gulp
``` 

## 5. CMD 安装 npm install --save-dev gulp-jade 
```sh
	$ npm install --save-dev gulp-jade 
``` 

## 6. 手动创建 gulpfile.js

## 7. 手动编辑 gulpfile.js
```javascript
	var gulp = require('gulp'),
		jade = require('gulp-jade');
		
	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/development'));
	});
``` 

## 8. CMD 运行 gulp jade 
```sh
	$ gulp jade 
``` 

## 9. 手动浏览器查看builds/development/index.html

## 10. 手动编辑index.jade后，查看浏览器的变化 ? **(??? 没有变化， watching ???)** 

*** 
*** 
## 11. 手动创建 src/js/logger.js
```javascript
	module.exports = {
		log: function(string) {
			if(console) console.log(string);
		}
	}
``` 

## 13. 手动创建 src/js/main.js
```javascript
	var logger =require('./logger');

	logger.log('Hurray, it works! :)');
``` 

## 14. CMD 安装 npm install --save-dev gulp-browserify 
```sh
	$ npm install --save-dev gulp-browserify 
``` 

## 15. 手动编辑 gulpfile.js 
```javascript
	var gulp = require('gulp'),
		jade = require('gulp-jade'),
		browserify = require('gulp-browserify');
		
	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/development'));
	});

	gulp.task('js',function(){
		return gulp.src('src/js/main.js')
			.pipe(browserify({ debug: true}))
			.pipe(gulp.dest('builds/development/js'));
	});
``` 

## 16. CMD 运行 gulp js 
```sh
	$ gulp js 
``` 

## 17. 手动编辑 index.jade 
```jade
	doctype html
	html
		head
			title hello jade & gulp
		body
			h1 we used jade to generate this
			p it seems like it works! :)
			mark just check the change of jade!
			script(src="./js/main.js")
``` 

## 18. CMD 运行 gulp jade 
```sh
	$ gulp jade 
``` 

## 19. 手动浏览器查看builds/development/index.html
```sh
	Ctrl + P 
	[index.html]
	(快速定位文件并打开它)
	Ctrl + Shift + P 
	[Open in Browser -Productive Server]
```

*** 
*** 
## 20. CMD 安装 npm install --save-dev gulp-uglify 
```sh
	$ npm install --save-dev gulp-uglify
``` 

## 21.  手动编辑 gulpfile.js 
```javascript
	var gulp = require('gulp'),
		jade = require('gulp-jade'),
		browserify = require('gulp-browserify'),
		uglify= require('gulp-uglify');
		
	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/development'));
	});

	gulp.task('js',function(){
		return gulp.src('src/js/main.js')
			.pipe(browserify({ debug: true}))
			.pipe(uglify())
			.pipe(gulp.dest('builds/development/js'));
	});
``` 

## 22. CMD 运行 gulp js 
```sh
	$ gulp js
``` 

## 23. 手动查看builds/development/js/main.js  PS:(13 lines -> 1 line) 

## 24. CMD 安装 npm install --save-dev gulp-if 
```sh
	$ npm install --save-dev gulp-if 
``` 

## 25.  手动编辑 gulpfile.js 
```javascript
	var gulp = require('gulp'),
		jade = require('gulp-jade'),
		browserify = require('gulp-browserify'),
		uglify= require('gulp-uglify'),
		gulpif= require('gulp-if');

	var env = process.env.NODE_ENV;
		
	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/development'));
	});

	gulp.task('js',function(){
		return gulp.src('src/js/main.js')
			.pipe(browserify({ debug: env === 'development'}))
			.pipe(gulpif(env === 'production', uglify()))
			.pipe(gulp.dest('builds/development/js'));
	});
``` 
## 26. CMD 运行 NODE_ENV=development gulp js PS:(使用开发调试模式)
```sh
	$ NODE_ENV=development gulp js
``` 

## 27. CMD 运行 NODE_ENV=production gulp js PS:(使用产品发布模式)
```sh
	$ NODE_ENV=production gulp js
``` 

## 28. 手动编辑 gulpfile.js PS:(手动：开启默认的模式)
```javascript
	// var env = process.env.NODE_ENV || 'production';
	var env = process.env.NODE_ENV || 'development';
``` 
```javascript
	var gulp = require('gulp'),
		jade = require('gulp-jade'),
		browserify = require('gulp-browserify'),
		uglify= require('gulp-uglify'),
		gulpif= require('gulp-if');

	var env = process.env.NODE_ENV || 'production'; 
		
	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/development'));
	});

	gulp.task('js',function(){
		return gulp.src('src/js/main.js')
			.pipe(browserify({ debug: env === 'development'}))
			.pipe(gulpif(env === 'production', uglify()))
			.pipe(gulp.dest('builds/development/js'));
	});
```
*** 
*** 
## 29. CMD 安装 npm install --save-dev gulp-sass 
```sh
	$ npm install --save-dev gulp-sass  
``` 
## 30. 手动编辑 gulpfile.js 
```javascript
	sass= require('gulp-sass');

	gulp.task('sass',function(){
		return gulp.src('src/sass/main.scss')
			.pipe(sass({ sourceComments: 'map'}))
			.pipe(gulp.dest('builds/development/css'));
	});
``` 

## 31. 手动创建 & 编辑 src/sass/main.scss
```sass
	body {
		color: $red;
	}
```  

## 33. 手动创建 & 编辑 src/sass/variables.scss
```sass
	$red: #ff0000;
	// rgba();
``` 

## 31. 手动编辑 src/sass/main.scss
```sass
	@import "variables";

	body {
		color: $red;
	}
```  

## 34. CMD 运行 gulp sass 
```sh
	$ gulp sass
```   

## 35. 手动编辑 index.jade 
```jade
	doctype html
	html
		head
			title hello jade & gulp
			link(rel="stylesheet" href="./css/main.css")
		body
			h1 we used jade to generate this
			p it seems like it works! :)
			mark just check the change of jade!
			script(src="./js/main.js")
``` 

## 36. CMD 运行 gulp jade 
```sh
	$ gulp jade
``` 

## 37. 手动编辑 gulpfile.js 
```javascript
	sass= require('gulp-sass');

	gulp.task('sass',function(){
		return gulp.src('src/sass/main.scss')
			.pipe(sass({ sourceComments: 'map'}))
			.pipe(gulp.dest('builds/development/css'));
	});
``` 




































## Using gulp with browserify without the plugin

### npm install --save-dev gulp browserify vinyl-source-stream
```sh
	npm install --save-dev gulp browserify vinyl-source-stream
	===
	npm install --save-dev gulp 
	npm install --save-dev browserify
	npm install --save-dev vinyl-source-stream
``` 
### npm install --save-dev gulp-uglify

### npm install --save-dev gulp-streamify
