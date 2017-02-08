/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp')
  , cache = require('gulp-cache')
  , del = require('del')
  ;

//清空icon
gulp.task('clean:icon', callback => {
  del(srcPaths.icons.to);
  return cache.clearAll(callback);
});