/**
 * Created by cycjimmy on 2016/7/13.
 */

var gulp = require('gulp');

var sass = require('gulp-sass');


/** Gulp task syntax
 * gulp.task('task-name', function () {
 * 	return gulp.src('source-files')          // Get source files with gulp.src
 * 		.pipe(aGulpPlugin())                 // Sends it through a gulp plugin
 * 		.pipe(gulp.dest('destination'))      // Outputs the file in the destination folder
 * })
 */

//sass
gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/style'))
})





/** Gulp watch syntax
 * gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
 */


gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.scss', ['sass']); //监听scss文件变化
	// Other watchers
})