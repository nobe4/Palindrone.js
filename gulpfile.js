var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

gulp.task('jshint', function(){
	 gulp.src(['src/*.js', 'test/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function(){
	 gulp.src('test/palindrone.js')
	.pipe(jasmine());
});

gulp.task('watch', function(){
	gulp.watch(['src/*.js', 'test/*.js'], ['jshint', 'test']);
});
