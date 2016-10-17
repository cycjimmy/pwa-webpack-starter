/**
 * Created by cycjimmy on 2016/7/13.
 */

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  useref = require('gulp-useref'),
  uglify = require('gulp-uglify'),
  gulpIf = require('gulp-if'),
  cssnano = require('gulp-cssnano'),
  svgstore = require('gulp-svgstore'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  del = require('del'),
  runSequence = require('run-sequence'),
  ts = require('gulp-typescript'),
  ghPages = require('gulp-gh-pages'),
  pug = require('gulp-pug');

/** Gulp task syntax
 * gulp.task('task-name', function () {
 * 	return gulp.src('source-files')          // Get source files with gulp.src
 * 		.pipe(aGulpPlugin())                 // Sends it through a gulp plugin
 * 		.pipe(gulp.dest('destination'))      // Outputs the file in the destination folder
 * })
 */

//CSS编译
gulp.task('sass', function () {
  return gulp
    .src('app/sass/**/*.scss')
    .pipe(sass())                      //编译sass
    .pipe(autoprefixer({
      browsers: ['last 2 versions'], //自动加前缀
      cascade: false
    }))
    .pipe(gulp.dest('app/style'))      //输出css
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});


//TS编译
gulp.task('ts', function () {
  return gulp
    .src('app/ts/**/*.ts')
    .pipe(ts({
      noImplicitAny: true
      //out: 'output.js'
    }))
    .pipe(gulp.dest('app/scripts'))    //输出js
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});


//pug输出
gulp.task('pug', function buildHTML() {
  return gulp
    .src('app/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'))            //输出html
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});

//svg图标合并
gulp.task('svgstore', function () {
  return gulp
    .src('app/icons/*.svg')
    .pipe(imagemin())                        //压缩svg
    .pipe(svgstore())                        //合并svg
    .pipe(gulp.dest('app/images/icons'));
});

//browserSync 自动刷新web服务器
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'app',                                    //目录
      routes: {
        "/bower_components": "bower_components"
      }
    }
  })
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
            .replace('bower_components', '../bower_components')
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
    .src(['app/images/**/*.+(png|jpg|gif|svg)', '!app/images/icons/**/*'])
    .pipe(imagemin())                    //压缩图片
    .pipe(gulp.dest('dist/images'))
});

//复制其他
gulp.task('copyOther', function () {
  return gulp
    .src([
      'app/images/icons/**/*'              //复制图标
    ], {
      base: 'app'
    })
    .pipe(gulp.dest('dist'))
});

//清空目录
gulp.task('clean', function (callback) {
  del('dist');
  return cache.clearAll(callback);
});

//清空目录，不包含图片
gulp.task('clean:dist', function (callback) {
  del(['dist/**/*', '!dist/images', '!dist/images/**/*']);
  return cache.clearAll(callback);
});


/** Gulp watch syntax
 * gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
 */

//监听
gulp.task('watch', ['browserSync', 'sass', 'ts', 'pug'], function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);                //监听scss文件变化
  gulp.watch('app/ts/**/*.ts', ['ts']);                      //监听TS文件变化
  gulp.watch('app/pug/**/*.pug', ['pug']);              	   //监听pug文件变化
});


/** runSequence syntax
 * gulp.task('task-name', function(callback) {
 *	  runSequence('task-one', 'task-two', 'task-three', callback);
 * });
 */



gulp.task('default', function (callback) {
  runSequence(['sass', 'ts', 'pug', 'browserSync', 'watch'],
    callback
  )
});


gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass', 'ts', 'pug',
    ['useref', 'images', 'copyOther'],
    callback
  )
});


//部署到ghPages
gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});