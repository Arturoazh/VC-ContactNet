'use strict';

var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');

var concat     = require('gulp-concat');
var gulpif     = require('gulp-if');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

var config = require('../config');

module.exports = function (gulp, appPrefix) {
  gulp.task(appPrefix + 'build-browserify', function () {

    return browserify(config.sharedFiles, {insertGlobals: false, debug: false})
      .bundle()
      .pipe(source(config.sharedFiles))
      .pipe(buffer())
      .pipe(ngAnnotate())
      .pipe(gulpif(!config.debug, uglify()))
      .pipe(concat('shared.js'))
      .pipe(gulp.dest(config.outputDir + '/js/'));
  });

};