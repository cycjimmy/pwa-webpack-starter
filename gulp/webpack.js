const
  gulp = require('gulp')
  , shell = require('gulp-shell')
  , webpack = require('webpack')
  ;


gulp.task('pack:dev', shell.task([
  'webpack --config webpack/webpack.dev.config.js --watch --color'
]));

gulp.task('pack:build', shell.task([
  'webpack --config webpack/webpack.build.config.js --progress --display-error-details --optimize-minimize --color'
]));

gulp.task('pack:build:watch', shell.task([
  'webpack --config webpack/webpack.build.config.js --progress --display-error-details --optimize-minimize --color --watch'
]));



