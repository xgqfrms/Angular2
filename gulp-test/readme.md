# gulp 使用教程 jade

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

## 5. CMD 安装 npm install --save-dev gulp-jade

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

## 9. 手动浏览器查看builds/development/index.html

## 10. 手动编辑index.jade后，查看浏览器的变化 ? **(??? 没有变化， watching ???)** 

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

## 19. 手动浏览器查看builds/development/index.html
```sh
	Ctrl + P 
	[index.html]
	(快速定位文件并打开它)
	Ctrl + Shift + P 
	[Open in Browser -Productive Server]
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
