/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  ts = require('gulp-typescript');

//TS编译
gulp.task('ts', function () {
  return gulp
    .src(srcPaths.ts)
    .pipe(ts({
      noImplicitAny: true
      //out: 'output.js'
    }))
    .pipe(gulp.dest('app/scripts'))    //输出js
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});