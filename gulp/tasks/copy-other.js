var config 		 = require('../config');
var gulp         = require('gulp');
var notify     = require('gulp-notify');


exports.task = function() {
  gulp.src(config.otherFiles)
    .pipe(gulp.dest('./'+config.outputDir+'/'))
    .pipe(notify("Archivos copiados"));
};