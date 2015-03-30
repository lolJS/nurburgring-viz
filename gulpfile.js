var gulp = require('gulp'),
  path = require('path'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(['./app/*.html', './app/*.css', './app/*.js'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html', './app/*.css', './app/*.js'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
 