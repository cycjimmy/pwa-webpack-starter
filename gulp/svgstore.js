/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  svgstore = require('gulp-svgstore'),
  imagemin = require('gulp-imagemin');

//svg图标合并
gulp.task('svgstore', function () {
  return gulp
    .src(srcPaths.icons)
    .pipe(imagemin())                        //压缩svg
    .pipe(svgstore())                        //合并svg
    .pipe(gulp.dest('app/images/icons'));
});