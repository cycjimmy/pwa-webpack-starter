/**
 * Created by cyc on 16/10/19.
 */

const
  gulp = require('gulp'),
  runSequence = require('run-sequence'),
  useref = require('gulp-useref'),
  uglify = require('gulp-uglify'),
  gulpIf = require('gulp-if'),
  cssnano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin');

//build
gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass', 'ts', 'pug', 'jsTemplates',
    ['useref', 'images', 'copyOther'],
    callback
  )
});


//压缩合并
gulp.task('useref', function () {
  return gulp
    .src('app/*.html')
    .pipe(useref(                                       //合并
      {
        newLine: ';',                                    //分号连接符
        transformPath: function (filePath) {             //修改路径
          return filePath
            .replace(srcPaths.bower, '../bower_components')
        }
      }
    ))
    .pipe(gulpIf('*.js', uglify()))                     //压缩JS
    .pipe(gulpIf('*.css', cssnano()))                   //压缩CSS
    .pipe(gulp.dest('dist'));
});

//压缩图片
gulp.task('images', function () {
  return gulp
    .src(srcPaths.img)
    .pipe(imagemin())                    //压缩图片
    .pipe(gulp.dest('dist/images'))
});

//复制其他
gulp.task('copyOther', function () {
  return gulp
    .src([
      'app/images/icons/**/*',              //复制图标
      srcPaths.data                         //data文件
    ], {
      base: 'app'
    })
    .pipe(gulp.dest('dist'))
});