const
  gulp = require('gulp')
  , plumber = require('gulp-plumber')
  , webpackStream = require('webpack-stream')
  , webpack = require('webpack')
  , browserSync = require('browser-sync')
  , webpackConf = require('../webpack/webpack.config')
  , webpackBuildConf = require('../webpack/webpack.build.config')
  ;


//引用webpack对js进行操作
gulp.task('pack', function () {
  return gulp
    .src(srcPaths.scripts)
    .pipe(plumber())
    .pipe(webpackStream(webpackConf, webpack))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('pack:build', function () {
  return gulp
    .src(srcPaths.scripts)
    .pipe(plumber())
    .pipe(webpackStream(webpackBuildConf, webpack))
    .pipe(gulp.dest('build/scripts'));
});



