// gulpによるタスク自動化設定

var gulp = require('gulp');
var rename = require('gulp-rename');
var ejs = require('gulp-ejs');
var replace = require('gulp-replace');


gulp.task('ejs', function() {
    return gulp
        .src(['views/**/*.ejs', '!' + 'views/**/_*.ejs'])
        .pipe(ejs())
        .pipe(rename({ extname: '.html'}))
        .pipe(gulp.dest('dist'));
});

// watchでEJSファイル更新を監視
gulp.task('default', function(done) {
    gulp.watch('views/*.ejs', gulp.task('ejs'));
    done();
});