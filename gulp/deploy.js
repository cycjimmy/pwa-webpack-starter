/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  ghPages = require('gulp-gh-pages');


//部署到ghPages
gulp.task('deploy', ()=> {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});