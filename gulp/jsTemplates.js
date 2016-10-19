/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  pug = require('gulp-pug'),
  job = require('gulp-pug-job'),
  browserSync = require('browser-sync');


//pug2js模板
gulp.task('jsTemplates', function () {
  return gulp
    .src(srcPaths.pugTemp)
    .pipe(pug({
      client: true,
      externalRuntime: true,
      //pretty: true,
      compileDebug: false
    }))
    .pipe(job({
      parent: 'window',
      namespace: 'templates',
      separator: '-'
    }))
    .pipe(gulp.dest(srcPaths.scripts + 'templates'))
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});



