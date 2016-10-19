/**
 * Created by cyc on 16/10/19.
 */
/**
 * Created by cycjimmy on 2016/7/13.
 */

const
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  data = require('gulp-data'),
  fs = require('fs');


//pug输出html
gulp.task('pug', function () {
  return gulp
    .src(srcPaths.pug)
    .pipe(data(function (file) {
      return {
        'statics': JSON.parse(fs.readFileSync('app/data/statics.json')),
      }
    }))
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'))            //输出html
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});
