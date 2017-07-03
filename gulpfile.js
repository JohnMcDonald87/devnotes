//get gulp node package
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

gulp.task('css', function() {
    gulp.src('style.css')
        .pipe(gulp.dest('css/min'));
});

gulp.task('prefix', function() {
    return gulp.src('style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
});

gulp.task('sass', function() {
    gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
});

//set default task
gulp.task('default', function() {

});

// Auto Watch
gulp.task('watch', ['sass', 'babel' /*, 'build'*/ ], function() {
    gulp.watch('*.scss', ['sass']);
});