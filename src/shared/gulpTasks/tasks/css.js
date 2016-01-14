'use strict';

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var strip  = require('gulp-strip-comments');
var ignore = require('gulp-ignore');

module.exports = function (gulp, config, appPrefix) {

  gulp.task(appPrefix + 'css', function () {
    gulp.src([
      config.appPath + '/assets/css/icons.css'
    ])
      .pipe(concat(config.cssBuildName))
      .pipe(strip())
      .pipe(gulp.dest(config.distPath + '/assets/css/'));
  });

};
