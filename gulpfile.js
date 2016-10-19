/**
 * Created by cycjimmy on 2016/7/13.
 */

const
  fs = require('fs'),
  gulp = require('gulp'),
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
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  data = require('gulp-data'),
  glob = require('glob'),
  es = require('event-stream'),
  path = require('path'),
  job = require('gulp-pug-job');


//入口路径
const srcPaths = {
  ts: 'app/ts/**/*.ts',                             //ts文件
  sass: 'app/sass/**/*.scss',                       //sass文件
  pug: [                                            //静态pug模板
    'app/pug/**/*.pug',
    '!app/pug/templates/*.pug'
  ],
  pugTemp: 'app/pug/templates/*.pug',               //pug2js模板
  scripts: 'app/scripts/',                          //js文件路径
  style: 'app/style/',                              //css文件路径
  icons: 'app/icons/*',                             //输入图标源
  img: [                                            //输入图片源
    'app/images/**/*.+(png|jpg|gif|svg)',
    '!app/images/icons/**/*'
  ],
  data: 'app/data/',                                //输入data源
  bower: "bower_components"                         //bower包入口
};


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
    .src(srcPaths.sass)
    .pipe(sass())                      //编译sass
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],   //自动加前缀
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
    .src(srcPaths.ts)
    .pipe(ts({
      noImplicitAny: true
      //out: 'output.js'
    }))
    .pipe(gulp.dest('app/scripts'))    //输出js
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});


//pug输出html
gulp.task('pug', function () {
  return gulp
    .src(srcPaths.pug)
    .pipe(data(function (file) {
      return {
        'statics': JSON.parse(fs.readFileSync('app/data/statics.json')),
      }
    }))
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app'))            //输出html
    .pipe(browserSync.reload({         //刷新web服务器
      stream: true
    }))
});

//pug2js模板
gulp.task('jsTemplates', function () {
  var files = glob.sync(srcPaths.pugTemp),
    streams = files.map(function (file) {
      return gulp
        .src(file)
        .pipe(pug({
          client: true,
          externalRuntime: true,
          //pretty: true,
          compileDebug: false
          //name: path.basename(file, '.pug')
        }))
        .pipe(job({
          // default options:
          parent: 'window',
          namespace: 'templates',
          separator: '-'
        }))
        .pipe(gulp.dest(srcPaths.scripts + 'templates'))
        .pipe(browserSync.reload({         //刷新web服务器
          stream: true
        }));
    });

  return es.merge.apply(es, streams);
});


//svg图标合并
gulp.task('svgstore', function () {
  return gulp
    .src(srcPaths.icons)
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
        "/bower_components": srcPaths.bower
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
gulp.task('watch', ['browserSync', 'sass', 'ts', 'pug', 'jsTemplates'], function () {
  gulp.watch(srcPaths.sass, ['sass']);                //监听scss文件变化
  gulp.watch(srcPaths.ts, ['ts']);                      //监听TS文件变化
  gulp.watch(srcPaths.pug, ['pug']);              	   //监听pug文件变化
  gulp.watch(srcPaths.pugTemp, ['jsTemplates']);       //监听pug模板文件变化
});


/** runSequence syntax
 * gulp.task('task-name', function(callback) {
 *	  runSequence('task-one', 'task-two', 'task-three', callback);
 * });
 */



gulp.task('default', function (callback) {
  runSequence(['sass', 'ts', 'pug', 'jsTemplates', 'browserSync', 'watch'],
    callback
  )
});


gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass', 'ts', 'pug', 'jsTemplates',
    ['useref', 'images', 'copyOther'],
    callback
  )
});


//部署到ghPages
gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});