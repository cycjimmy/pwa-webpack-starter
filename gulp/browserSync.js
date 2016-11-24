/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  getDataAjax = require('../mock/getData.ajax');

//browserSync 自动刷新web服务器
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'dist',                                   //目录
      routes: {
        "/node_modules": srcPaths.node_modules,
        "/images": "app/images",
        "/data": "app/data",
      },
      //https: true,
    },
    ghostMode: false,
    logLevel: "debug",
    middleware: [
      {
        route: "/getData",
        handle: getDataAjax(),
      },
    ],
  })
});


gulp.task('browserSync:build', function () {
  browserSync({
    server: {
      baseDir: 'build',
      //https: true,
    },
    port: 4000,
    ui: {
      port: 4001
    },
    ghostMode: false,
    logLevel: "debug",
    middleware: [
      {
        route: "/getData",
        handle: getDataAjax(),
      },
    ],
  })
});

