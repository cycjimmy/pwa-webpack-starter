/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  cache = require('gulp-cache'),
  del = require('del');


//清空目录
gulp.task('clean', function (callback) {
  del('dist');
  return cache.clearAll(callback);
});

//清空目录，不包含图片
gulp.task('clean:dist', function (callback) {
  del(['dist/**/*', '!dist/images', '!dist/images/**/*']);
  return cache.clearAll(callback);
});