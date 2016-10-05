# gulp plugins 

[http://gulpjs.com/plugins/](http://gulpjs.com/plugins/)  

[https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

```sh
gulp-typescript
gulp-react
gulp-render
gulp-sass
gulp-less
gulp-babel
gulp-uglyfly
gulp-jade
gulp-pug
gulp-yaml
gulp-config-sync
gulp-angular-filesort
gulp-angular-protractor
gulp-angular-architecture-graph
gulp-angular-svg-d
gulp-svgicons2svgfont
gulp-svg-icons
gulp-svg-sprites
gulp-svgmin
gulp-imagemin
gulp.spritesmith
gulp-live-server
gulp-server-livereload
gulp-express
gulp-webserver2

...
``` 
#  实时渲染(局部)
[https://www.browsersync.io/](https://www.browsersync.io/) 
[https://www.browsersync.io/docs](https://www.browsersync.io/docs) 
[https://github.com/Browsersync/browser-sync](https://github.com/Browsersync/browser-sync)

Time-saving synchronised browser testing.
Your indispensable test assistant.

Integrates with your current build tools like Gulp & Grunt
## Browsersync 

> Global Install && Local Install

```sh
$ npm install -g browser-sync
$ npm install browser-sync --save-dev
``` 



# lifestyle css/sass/less  实时双向渲染

## LiveStyle. 
The first bi-directional real-time edit tool for CSS, LESS and SCSS.

```code
chrome extension + sublime plugin
``` 

 
[http://livestyle.io/](http://livestyle.io/)


# LiveReload   css/sass/less/js/images  实时渲染

LiveReload monitors changes in the file system. 

As soon as you save a file, it is preprocessed as needed, and the browser is refreshed.

CSS edits and image changes apply live. CoffeeScript, SASS, LESS and others just work.

[http://livereload.com/](http://livereload.com/)  

[https://github.com/livereload/livereload-plugins](https://github.com/livereload/livereload-plugins) 

[https://github.com/vohof/gulp-livereload](https://github.com/vohof/gulp-livereload)

[https://www.npmjs.com/package/livereload](https://www.npmjs.com/package/livereload)

```code
chrome extension + npm package

``` 


```sh
$ npm install -g livereload 
// **error**
$ npm install --save-dev gulp-livereload
// **bug**

$ livereload 
``` 

```js
//gulpfile.js
var gulp = require('gulp'),
	livereload= require('gulp-livereload');

gulp.task('watch',function(file){
	livereload.listen();

	gulp.watch('./*.jade',function(file){
		console.log(file);
		gulp.src(file.path)
		.pipe(livereload());
	}
});

``` 




### livereload install error

[http://www.imooc.com/qadetail/171066?t=246802#id_246802](http://www.imooc.com/qadetail/171066?t=246802#id_246802)

[https://github.com/nodejs/node/issues/8939](https://github.com/nodejs/node/issues/8939) 

[https://github.com/nodejs/node-gyp/issues](https://github.com/nodejs/node-gyp/issues/154) 

[http://stackoverflow.com/questions/33896511/npm-install-fails-with-node-gyp](http://stackoverflow.com/questions/33896511/npm-install-fails-with-node-gyp) 

[https://github.com/nodejs/node-gyp#installation](https://github.com/nodejs/node-gyp#installation)


> @ step01  

# **好使，要admin 权限 <h1>(too slowly & install python ,vs buil tools)</h1> , still error**
```sh
$ npm install --global --production windows-build-tools
``` 

> @ step02  

### [https://www.npmjs.com/package/node-gyp-install](https://www.npmjs.com/package/node-gyp-install)

# **好使, still error**
```sh
$ npm install -g node-gyp-install
``` 
> @ step03  

# ?
[https://github.com/livereload/livereload-plugins](https://github.com/livereload/livereload-plugins) 

[https://github.com/vohof/gulp-livereload](https://github.com/vohof/gulp-livereload)

[https://www.npmjs.com/search?q=+livereload+](https://www.npmjs.com/search?q=+livereload+)
[https://www.npmjs.com/package/livereload](https://www.npmjs.com/package/livereload)


```sh
$ npm install -g livereload  
// **fuck bufferutil error ,still error**
$ npm install --save-dev gulp-livereload
// **bugs**
$ livereload 
``` 