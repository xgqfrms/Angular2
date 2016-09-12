var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	uglify= require('gulp-uglify'),
	gulpif= require('gulp-if');

// var env = process.env.NODE_ENV || 'production';
var env = process.env.NODE_ENV || 'development';
	
gulp.task('jade',function(){
	return gulp.src('src/template/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('builds/development'));
});
gulp.task('js',function(){
	return gulp.src('src/js/main.js')
		.pipe(browserify({ debug: env === 'development'}))
		.pipe(gulpif(env === 'production', uglify()))
		// .pipe(uglify())
		.pipe(gulp.dest('builds/development/js'));
});
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