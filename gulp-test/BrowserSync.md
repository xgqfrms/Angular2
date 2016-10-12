#  BrowserSync 

## BrowserSync提供了一种在多个浏览器里测试网页的很好方式

BrowserSync不需要使用浏览器插件，因为它本身就可以为你提供文件服务（如果文件是动态的，则为他们提供代理服务） 
和用来开启浏览器和服务器之间的socket的脚本服务。 
到目前为止这个功能的使用都十分顺畅。

[BrowserSync](http://www.w3ctech.com/topic/134)

```sh
$ npm install --save-dev browser-sync
``` 

```code
var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
   var files = [
      'app/**/*.html',
      'app/assets/css/**/*.css',
      'app/assets/imgs/**/*.png',
      'app/assets/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});
``` 


