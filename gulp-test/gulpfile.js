var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	uglify= require('gulp-uglify'),
	gulpif= require('gulp-if'),
	sass= require('gulp-sass');

// var env = process.env.NODE_ENV || 'production';
var env = process.env.NODE_ENV || 'development';

var outputDir = 'builds/development';
	
gulp.task('jade',function(){
	return gulp.src('src/template/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest(outputDir));
		// .pipe(gulp.dest('builds/development'));
});

gulp.task('js',function(){
	return gulp.src('src/js/main.js')
		.pipe(browserify({ debug: env === 'development'}))
		.pipe(gulpif(env === 'production', uglify()))
		// .pipe(uglify())
		.pipe(gulp.dest(outputDir + '/js'));
		// .pipe(gulp.dest('builds/development/js'));
});

gulp.task('sass',function(){
	return gulp.src('src/sass/main.scss')
		.pipe(sass({ sourceComments: 'map'}))
		.pipe(gulp.dest(outputDir + '/css'));
		// .pipe(gulp.dest('builds/development/css'));
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