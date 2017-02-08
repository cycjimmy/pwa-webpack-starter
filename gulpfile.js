/**
 * Created by cycjimmy on 2016/7/13.
 */

const
  requireDir = require('require-dir')
  , gulp = require('gulp')
  , runSequence = require('run-sequence')
  ;

//入口路径
global.srcPaths = {
  icons: {                                          //图标
    from: 'static/icons/',
    to: 'static/images/icons/',
  },
  build : 'build/**/*',                             //最终出口
  node_modules: "node_modules"                      //node_modules包入口
};


// Require all tasks in the 'gulp' folder.
requireDir('./gulp', {
  recurse: false
});

//默认任务
gulp.task('default', callback => {
  runSequence('pack:dev',
    callback
  );
});





