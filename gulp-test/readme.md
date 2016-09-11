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

## 10. 手动编辑index.jade后，查看浏览器的变化 ? 

## ??? 没有变化， watching ???