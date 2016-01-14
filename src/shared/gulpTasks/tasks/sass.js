'use strict';

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

module.exports = function(gulp, config, appPrefix) {
  gulp.task(appPrefix + 'sass', function () {
    
    gulp.src(config.sourcePath)
      .pipe(plumber({
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
      .pipe(sass({errLogToConsole: true}))   
      .pipe(concat(config.buildName))
      .pipe(gulp.dest(config.distPath));
  });

};