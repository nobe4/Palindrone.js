var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  gulp.src('src/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function(){
	gulp.watch('src/*.js', ['jshint']);
});
