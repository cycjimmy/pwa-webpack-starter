/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  browserSync = require('browser-sync');

//browserSync 自动刷新web服务器
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'app',                                    //目录
      routes: {
        "/bower_components": srcPaths.bower
      }
    }
  })
});