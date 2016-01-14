'use strict';

var config  = require('../config.js').build;
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function (gulp, config, appPrefix) {

  gulp.task(appPrefix + 'lint', function () {
    return gulp.src([
      config.appPath + '/**/*.js',
      '!' + config.appPath + '/assets/js{,/**}'
    ])
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });

};