/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp')
  , runSequence = require('run-sequence')
  , imagemin = require('gulp-imagemin')
  ;

//build
gulp.task('build', function (callback) {
  runSequence('pack:build',
    ['images', 'copyOther'],
    callback
  )
});

//压缩图片
gulp.task('images', function () {
  return gulp
    .src(srcPaths.img)
    .pipe(imagemin())                    //压缩图片
    .pipe(gulp.dest('build/images'))
});

//复制其他
gulp.task('copyOther', function () {
  return gulp
    .src([
      'app/images/icons/**/*',              //复制图标
    ], {
      base: 'app'
    })
    .pipe(gulp.dest('build'))
});