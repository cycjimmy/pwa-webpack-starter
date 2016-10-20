/**
 * Created by cycjimmy on 2016/7/13.
 */

const
  requireDir = require('require-dir'),
  gulp = require('gulp'),
  runSequence = require('run-sequence');


//入口路径
global.srcPaths = {
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
  data: 'app/data/**/*',                            //输入data源
  dataTemp: 'app/pug/data/statics.json',            //模板用data
  bower: "bower_components"                         //bower包入口
};


// Require all tasks in the 'gulp' folder.
requireDir('./gulp', {recurse: false});

//默认任务
gulp.task('default', function (callback) {
  runSequence(['sass', 'ts', 'pug', 'jsTemplates', 'browserSync', 'watch'],
    callback
  )
});

//监听
gulp.task('watch', ['browserSync', 'sass', 'ts', 'pug', 'jsTemplates'], function () {
  gulp.watch(srcPaths.sass, ['sass']);                //监听scss文件变化
  gulp.watch(srcPaths.ts, ['ts']);                      //监听TS文件变化
  gulp.watch(srcPaths.pug, ['pug']);              	   //监听pug文件变化
  gulp.watch(srcPaths.pugTemp, ['jsTemplates']);       //监听pug模板文件变化
});

