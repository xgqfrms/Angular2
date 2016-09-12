var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	uglify= require('gulp-uglify'),
	gulpif= require('gulp-if'),
	sass= require('gulp-sass'),
	connect= require('gulp-connect');

var env = process.env.NODE_ENV || 'production';
// var env = process.env.NODE_ENV || 'development';

var outputDir = 'builds/development';
	
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
	/*
		if (env === 'development') {
			config.sourceComments = 'map';
		} else if(env === 'production'){
			config.outputStyle = 'compressed';
		}else{
			config.sourceComments = 'map'; 
		}
	*/
	return gulp.src('src/sass/main.scss')
		// .pipe(sass({ sourceComments: 'map'}))
		.pipe(sass(config))
		.pipe(gulp.dest(outputDir + '/css'))
		.pipe(connect.reload());
		// .pipe(gulp.dest('builds/development/css'));
});

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
		port: 8000,
	    livereload: true,
		// open: { browser: 'Google Chrome'}
	});
});

gulp.task('watch',function(){
	gulp.watch('src/template/**/*.jade',['jade']);
	gulp.watch('src/js/**/*.js',['js']);
	gulp.watch('src/sass/**/*.scss',['sass']);
});

gulp.task('default',['js','sass','jade','watch','connect']);
// gulp
/*
var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify'),
	streamify = require('gulp-streamify'); 
gulp.task('js',function(){
	return browserify('.js/main')
		.bundle({ debug: true})
		.pipe(source('bundle.js'))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest('.'));
});
*/