var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var haml = require('gulp-haml');

var paths = {};

paths.js = ['src/js/**/*'];
paths.sass = ['src/sass/app.sass'];
paths.haml = ['src/index.haml'];

gulp.task('sass', function() {
  gulp.src(paths.sass)
      .pipe(sass())
      .pipe(csslint())
      .pipe(rename('app.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('haml', function() {
  gulp.src(paths.haml)
      .pipe(haml())
      .pipe(rename('index.html'))
      .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  gulp.src(paths.js)
      .pipe(jshint())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.haml, ['haml']);
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('build', ['haml', 'sass', 'js']);
