const
  gulp = require('gulp')
  , shell = require('gulp-shell')
  , plumber = require('gulp-plumber')
  , webpackStream = require('webpack-stream')
  , webpack = require('webpack')
  , browserSync = require('browser-sync')
  , webpackDevConf = require('../webpack/webpack.dev.config.js')
  , webpackBuildConf = require('../webpack/webpack.build.config')
  ;


//引用webpack对js进行操作
// gulp.task('pack', function () {
//   return gulp
//     .src(srcPaths.scripts)
//     .pipe(plumber())
//     .pipe(webpackStream(webpackDevConf, webpack))
//     .pipe(gulp.dest('dist/scripts'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// });

gulp.task('pack', shell.task([
  'webpack --config webpack/webpack.dev.config.js --watch --color'
]));

gulp.task('pack:build', shell.task([
  'webpack --config webpack/webpack.build.config.js --progress --display-error-details --color'
]));



// gulp.task('pack:build', function () {
//   return gulp
//     .src(srcPaths.scripts)
//     .pipe(plumber())
//     .pipe(webpackStream(webpackBuildConf, webpack))
//     .pipe(gulp.dest('build/scripts'));
// });



