'use strict';

var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');
var notify     = require('gulp-notify');
var sftp       = require('gulp-sftp');
var concat     = require('gulp-concat');
var gulpif     = require('gulp-if');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

var config = require('../config');

module.exports = function (gulp, appPrefix) {

  gulp.task(appPrefix + 'build-browserify', function () {

    console.log('browserify', config);
    browserify(config.sourcePath)
      .bundle()
      .pipe(source(config.sourcePath), {insertGlobals: true, debug: false})
      .pipe(buffer())
      .pipe(ngAnnotate())
      // .pipe(gulpif(!config.debug, uglify()))
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest(config.outputDir + '/js/'))
      .pipe(sftp({
         host: config.host,
         user: config.user,
         key: config.key,
         remotePath: config.remotePath+'/js/'
      }))
      .pipe(notify("Javascript Procesado"));
  });

};