'use strict';

module.exports = function (gulp, config, appPrefix) {

  gulp.task(appPrefix + 'watch', function () {
    gulp.watch([config.appPath + '/**/*.js'].concat(config.gulpIgnore), [appPrefix + 'browserify']);
    gulp.watch(config.appPath + '/**/*.scss', [appPrefix + 'sass']);
    gulp.watch(config.appPath + '/**/*.css', [appPrefix + 'css']);
    gulp.watch(config.appPath + '/**/*.html', [appPrefix + 'html']);
    gulp.watch([config.appPath + '/assets/**/*'].concat(config.gulpIgnore),
      [appPrefix + 'assets']);
  });

};