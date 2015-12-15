var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var plumber = require('gulp-plumber');
var minify = require('gulp-minify');

gulp.task('jshint', function(){
	gulp.src(['src/*.js', 'test/*.js'])
	.pipe(plumber())
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function(){
	gulp.src('test/palindrone.js')
	.pipe(plumber())
	.pipe(jasmine());
});

gulp.task('minify', function() {
	gulp.src('src/palindrone.js')
	.pipe(minify())
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch(['src/*.js', 'test/*.js'], ['jshint', 'test']);
});

