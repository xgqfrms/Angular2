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
	var outputDir = 'builds/development';
	//path 变量
	.pipe(gulp.dest(outputDir));
	// .pipe(gulp.dest('builds/development'));
	.pipe(gulp.dest(outputDir + '/js'));
	// .pipe(gulp.dest('builds/development/js'));
	.pipe(gulp.dest(outputDir + '/css'));
    // .pipe(gulp.dest('builds/development/css'));
``` 

```javascript
	gulp.task('sass',function(){
		var config = {};
		if (env === 'development') {
			config.sourceComments = 'map';
		} 
		if(env === 'production'){
			config.outputStyle = 'compressed';
		}
		return gulp.src('src/sass/main.scss')
			// .pipe(sass({ sourceComments: 'map'}))
			.pipe(sass(config))
			.pipe(gulp.dest(outputDir + '/css'));
			// .pipe(gulp.dest('builds/development/css'));
	});
``` 

## 38. CMD 运行 NODE_ENV=development gulp sass PS:(使用开发调试模式)
```sh
	$ NODE_ENV=development gulp sass
``` 

## 39. CMD 运行 NODE_ENV=production gulp sass PS:(使用产品发布模式)
```sh
	$ NODE_ENV=production gulp sass
``` 

***
***
## 40. 手动编辑 gulpfile.js 
```javascript
	gulp.task('watch',function(){
		gulp.watch('src/template/**/*.jade',['jade']);
		gulp.watch('src/js/**/*.js',['js']);
		gulp.watch('src/sass/**/*.scss',['sass']);
	});
``` 

## 41. CMD 运行 gulp watch PS:(使用 watch 自动监测变化)
```sh
	$ gulp watch
``` 

## 42. 手动编辑 gulpfile.js 
```javascript
	gulp.task('default',['js','sass','jade','watch']);
	/*
		function(){
			gulp.watch('src/template/**/*.jade',['jade']);
		}
		=== ???
		['jade']
	*/
``` 

## 43. CMD 运行 gulp PS:(使用default模式,指定 tasks)
```sh
	$ gulp
``` 

## 44.  CMD 运行 Ctrl + C (退出 watch / default 模式)

***
***
## 45. CMD 安装 npm install --save-dev gulp-connect 
```sh
	$ npm install --save-dev gulp-connect  
``` 

## 46. 手动编辑 gulpfile.js  PS:(自动启动Web Server,打开browser,可以配置端口)
```javascript
	connect= require('gulp-connect');

	gulp.task('connect',connect.server({
		root: [outputDir],
		open: { browser: 'Google Chrome'}
	}));

	gulp.task('default',['js','sass','jade','watch','connect']);
```  

## 47. CMD 运行 gulp PS:(使用default模式,指定 tasks)
```sh
	$ gulp
``` 

## 48. 手动编辑 gulpfile.js  PS:(自动刷新 .pipe(connect.reload());)
```javascript
	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest(outputDir))
			.pipe(connect.reload());
			// .pipe(gulp.dest('builds/development'));
	});

	gulp.task('js',function(){
		return gulp.src('src/js/main.js')
			.pipe(browserify({ debug: env === 'development'}))
			.pipe(gulpif(env === 'production', uglify()))
			.pipe(uglify())
			.pipe(gulp.dest(outputDir + '/js'))
			.pipe(connect.reload());
			// .pipe(gulp.dest('builds/development/js'));
	});

	gulp.task('sass',function(){
		var config = {};
		if (env === 'development') {
			config.sourceComments = 'map';
		} 
		if(env === 'production'){
			config.outputStyle = 'compressed';
		}
		return gulp.src('src/sass/main.scss')
			// .pipe(sass({ sourceComments: 'map'}))
			.pipe(sass(config))
			.pipe(gulp.dest(outputDir + '/css'))
			.pipe(connect.reload());
			// .pipe(gulp.dest('builds/development/css'));
	});
```  

## 49. CMD 运行 gulp 
```sh
	$ gulp
``` 

## 50. some errors
[here some errors, what's wrong with this? #202](https://github.com/AveVlad/gulp-connect/issues/202)
[Get started with gulp Part 6: LiveReload and web server](https://www.youtube.com/watch?v=KURMrW-HsY4&index=7&list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm)
[/images/errors/](https://github.com/xgqfrms/AngularJS/tree/gh-pages/images/errors)
[gulp-test](https://github.com/xgqfrms/AngularJS/tree/gh-pages/gulp-test)
```javascript
	/*
	gulp.task('connect',connect.server({
		root: [outputDir],
		open: { browser: 'Google Chrome'}
	}));
	*/
	//https://github.com/AveVlad/gulp-connect

	gulp.task('connect',function(){
		connect.server({
			root: [outputDir],
			port: 8080,
		    livereload: true,
			// open: { browser: 'Google Chrome'}
		});
	});
``` 



## bugs fixed ?

### 手动编辑 gulpfile.js 

'''javascript
	var env = process.env.NODE_ENV;
'''

>
CMD: 手动 传入参数 
set NODE_ENV=development
set NODE_ENV=production

'''bash
	$ set NODE_ENV=development
	$ gulp
'''
'''bash
	$ set NODE_ENV=production
	$ gulp
'''

???
### why it doesn't work by using 
// var env = process.env.NODE_ENV || 'production';
// var env = process.env.NODE_ENV || 'development';















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
