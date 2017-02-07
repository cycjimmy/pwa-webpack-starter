/**
 * Created by cyc on 16/10/19.
 */

const
  fs = require('fs')
  , path = require('path')
  , gulp = require('gulp')
  , runSequence = require('run-sequence')
  , merge = require('merge-stream')
  , svgstore = require('gulp-svgstore')
  , imagemin = require('gulp-imagemin')
  ;


function getFolders(dir) {
  return fs
    .readdirSync(dir)
    .filter(file => {
      return fs
        .statSync(path.join(dir, file))
        .isDirectory();
    });
}


//svg图标合并
gulp.task('svgstore:noClean', () => {

  let
    iconPath = srcPaths.icons
    , folders = getFolders(iconPath)
    , tasks = folders.map(folder => {
      return gulp
        .src(path.join(iconPath, folder, '/*.svg'))    //路径拼接
        .pipe(imagemin())                              //压缩svg
        .pipe(svgstore())                              //合并svg
        .pipe(gulp.dest('app/images/icons'));
    });

  return merge(tasks);
});


gulp.task('svgstore', callback => {
  runSequence('clean:icon', 'svgstore:noClean',
    callback
  );
});