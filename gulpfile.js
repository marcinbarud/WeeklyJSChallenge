'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('./css/*.scss')
    .pipe(watch('./css/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
