'use strict';

//var browserify = require('gulp-browserify');

var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');

var config     = require('../config.js').build;
var concat     = require('gulp-concat');
var gulpif     = require('gulp-if');
var uglify    = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

module.exports = function (gulp, config,appPrefix) {

  gulp.task(appPrefix + 'browserify', function () {
    return browserify(config.sourcePath, {insertGlobals: config.insertGlobals, debug: config.insertGlobals})
      .bundle()
      .pipe(source(config.sourcePath))
      .pipe(buffer())
      .pipe(ngAnnotate())
      .pipe(gulpif(!config.debug, uglify()))
      .pipe(concat(config.buildName))
      .pipe(gulp.dest(config.distPath));
  });

};

/*



 */