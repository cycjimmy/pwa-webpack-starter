/**
 * Created by cycjimmy on 2016/7/13.
 */

const
  requireDir = require('require-dir'),
  gulp = require('gulp'),
  runSequence = require('run-sequence');


//入口路径
global.srcPaths = {
  sass: 'app/sass/**/*.scss',                       //sass文件
  view: 'app/view/**/*',                            //静态pug模板
  scripts: 'app/scripts/**/*',                      //js文件路径
  style: 'app/style/',                              //css文件路径
  icons: 'app/icons/*',                             //输入图标源
  img: [                                            //输入图片源
    'app/images/**/*.+(png|jpg|gif|svg)',
    '!app/images/icons/**/*'
  ],
  node_modules: "node_modules"                      //node_modules包入口
};


// Require all tasks in the 'gulp' folder.
requireDir('./gulp', {recurse: false});

//默认任务
gulp.task('default', function (callback) {
  runSequence('clean', ['sass', 'pack'], ['browserSync', 'watch'],
    callback
  )
});

//监听
gulp.task('watch', function () {
  gulp.watch(srcPaths.sass, ['sass']);                               //监听scss文件变化
  gulp.watch([
      srcPaths.scripts,
      srcPaths.view
    ],
    ['pack']);             //监听JS,pug文件变化
});




