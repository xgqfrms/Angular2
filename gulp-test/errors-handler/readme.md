holy shit!!  
you show me the error code!

It should be like this!
gulp.task('connect',function(){???});

gulp.task('connect',function(){
  connect.server({
  root: [outputDir],
  //port: 8080,
     livereload: true
  //open: { browser: 'Google Chrome'}
  //error ?
  });
 });
