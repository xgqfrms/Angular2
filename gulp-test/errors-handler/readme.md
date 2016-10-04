# gulp error

> open: { browser: 'Google Chrome'}

![open-error](https://cloud.githubusercontent.com/assets/18028768/19084351/cc576d40-8a98-11e6-9c8c-e21309a89fa3.PNG)

![gulp-error](https://cloud.githubusercontent.com/assets/18028768/19084259/69b3e01a-8a98-11e6-9567-eff7e25575ca.PNG)
![gulp-task-error](https://cloud.githubusercontent.com/assets/18028768/19084260/69bd173e-8a98-11e6-80d5-2c9fbc1c33ae.PNG)


### [https://github.com/AveVlad/gulp-connect/issues/209](https://github.com/AveVlad/gulp-connect/issues/209)  

### [https://github.com/AveVlad/gulp-connect/issues/202](https://github.com/AveVlad/gulp-connect/issues/202)


```javascript
   gulp.task('connect',function(){
    	connect.server({
    		root: [outputDir],
    		port: 8000,
       	    livereload: true,
    		// open: { browser: 'Google Chrome'}
   	   });
    });
``` 
![gulp-connect-error](https://cloud.githubusercontent.com/assets/18028768/18431020/a30c02ee-790d-11e6-916c-4bdea9fa353b.png)
![gulp-connect-open-error](https://cloud.githubusercontent.com/assets/18028768/18431024/a8e74c1e-790d-11e6-9b15-da95fe85cfcd.png)
I just confused this ,and can not understand why !

I following the below video tutorial , but some errors occured!
**(May be it out of date?)**

> Get started with gulp Part 6: LiveReload and web server

[youtube video ](https://www.youtube.com/watch?v=KURMrW-HsY4&index=7&list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm)

**I'm looking forward to hearing from your  reply as soon as possible!** 

## **holy shit!!**  

> you show me the error code!

## **It should be like this!**

> gulp.task('connect',function(){???}); 

```js
gulp.task('connect',function(){
  connect.server({
  root: [outputDir],
  //port: 8080,
     livereload: true
  //open: { browser: 'Google Chrome'}
  //error ?
  });
 });
``` 






