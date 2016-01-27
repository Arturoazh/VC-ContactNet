'use strict';

var config = require('../config');
module.exports = function (gulp, appPrefix, sharedPrefix) {
  gulp.task(appPrefix + 'watch', function () {
    // gulp.watch(config.sharedFiles, [sharedPrefix + 'build-browserify']);
    gulp.watch([config.appPath + '/**/*.js'].concat(config.gulpIgnore), [appPrefix + 'build-browserify']);
    // gulp.watch(config.jsFiles, [appPrefix + 'build-js']);
    gulp.watch(config.scssFiles, [appPrefix + 'build-css']);
    gulp.watch(config.htmlFiles, [appPrefix + 'build-html']);
    gulp.watch(config.otherFiles, [appPrefix + 'copy-other']);
  
  });

};