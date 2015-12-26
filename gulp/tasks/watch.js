var config = require('../config');
var gulp = require('gulp');

exports.task = function() {
  gulp.watch(config.jsFiles, ['build-js']);
  gulp.watch(config.scssFiles, ['build-scss']);
  gulp.watch(config.htmlFiles, ['build-html']);
  gulp.watch(config.otherFiles, ['copy-other']);
};