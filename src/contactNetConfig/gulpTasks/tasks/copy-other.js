'use strict';

var config 		 = require('../config');
var gulp       = require('gulp');
var notify     = require('gulp-notify');
var sftp       = require('gulp-sftp');
var sftp       = require('gulp-sftp');


module.exports = function(gulp, appPrefix) {

  gulp.task(appPrefix + 'copy-other', function() {
    return gulp.src(config.otherFiles)
    .pipe(gulp.dest('./'+config.outputDir+'/'))
    .pipe(sftp({
         host: config.host,
         user: config.user,
         key: config.key,
         remotePath: config.remotePath+'/'
      }))
    .pipe(notify("Archivos copiados"));
  });

};


// .pipe(sftp({
//    host: config.host,
//    user: config.user,
//    key: config.key,
//    remotePath: config.remotePath+'dist/'
// }))

