'use strict';

var config 		 = require('../config');
var gulp       = require('gulp');
var jshint     = require('gulp-jshint');
var concat     = require('gulp-concat');
var notify     = require('gulp-notify');
var ngAnnotate = require('gulp-ng-annotate');
var uglify 		 = require('gulp-uglify');
var sftp       = require('gulp-sftp');


module.exports = function(gulp, appPrefix) {

  gulp.task(appPrefix + 'build-js', function() {
    return gulp.src(config.jsFiles)
	    .pipe(jshint())
	    .on("error", notify.onError("Error: <%= error.message %>"))
	    .pipe(jshint.reporter('default'))
	    .pipe(ngAnnotate())
	    .pipe(concat('app.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest(config.outputDir+'/js/'))
      .pipe(sftp({
         host: config.host,
         user: config.user,
         key: config.key,
         remotePath: config.remotePath+'/js/'
      }))
	    .pipe(notify("Javascript Procesado"));
  });

};


// .pipe(sftp({
//    host: config.host,
//    user: config.user,
//    key: config.key,
//    remotePath: config.remotePath+'dist/'
// }))

