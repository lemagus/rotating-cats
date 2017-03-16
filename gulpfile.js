var gulp = require('gulp');
var	autoprefixer = require('gulp-autoprefixer');
var	sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src( './css/src/*.scss')
    	.pipe(sass())
        .pipe(autoprefixer({ browsers: ['> 1%', 'IE 9', 'IE 8'] }))
        .pipe(gulp.dest( './css/'));
});

//Watch task
gulp.task('default', ['styles'] ,function() {
	gulp.watch( './css/src/*.scss',['styles']);
});