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
      baseDir: 'dist',                                   //目录
      routes: {
        "/node_modules": srcPaths.node_modules,
        "/images": "app/images",
        "/data": "app/data"
      }
    }
  })
});


gulp.task('browserSync:build', function () {
  browserSync({
    server: {
      baseDir: 'build'
    }
  })
});

