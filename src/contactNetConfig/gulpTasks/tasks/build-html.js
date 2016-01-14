'use strict';

var config 		 = require('../config');
var gulp         = require('gulp');
var notify     = require('gulp-notify');
var minifyHTML   = require('gulp-minify-html');

module.exports = function (gulp, appPrefix) {

  gulp.task(appPrefix + 'build-html', function () {
    return gulp.src(config.htmlFiles)
	    .pipe(minifyHTML({
	        conditionals: true,
	        spare: true,
	        empty: true
	    }))
	    .on("error", notify.onError("Error: <%= error.message %>"))
	    .pipe(gulp.dest('./'+config.outputDir+'/'))
	    .pipe(notify("HTML Procesado"));
  });

};


