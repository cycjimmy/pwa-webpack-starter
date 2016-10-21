/**
* Created by cyc on 16/10/19.
*/

const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync');


//CSS编译
gulp.task('sass', function () {
  return gulp
    .src(srcPaths.sass)
    .pipe(sass())                      //编译sass
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],   //自动加前缀
      cascade: false
    }))
    .pipe(gulp.dest('app/style'))      //输出css
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});