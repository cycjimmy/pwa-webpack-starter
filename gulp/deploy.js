/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  ghPages = require('gulp-gh-pages');


//部署到ghPages
gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});