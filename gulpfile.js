var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    less = require('gulp-less');

var paths = {
    less: ['./less/**/*.less']
};

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watcher',function() {
    gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['less', 'watcher']);