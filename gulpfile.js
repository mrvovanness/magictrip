var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "./",
      middleware: [historyApiFallback()]
    }
  });
});
