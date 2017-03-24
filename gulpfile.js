'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var babel = require('gulp-babel');

gulp.task('sass', function(){
    return gulp.src('./src/css/*.scss')
    .pipe(watch('./src/css/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('babel', () => {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['sass', 'babel']);