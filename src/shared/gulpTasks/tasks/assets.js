'use strict';

var changed = require('gulp-changed');

module.exports = function (gulp, config, appPrefix) {

  gulp.task(appPrefix + 'assets', function () {
    return gulp.src([
      config.appPath + '/assets/js/**/*',
      config.appPath + '/assets/fonts/**/*',
      config.appPath + '/assets/img/**/*',
      config.appPath + '/assets/lang/**/*'
    ], {base: config.appPath + '/assets/'})
      .pipe(changed(config.distPath))
      .pipe(gulp.dest(config.distPath + '/assets'));
  });

};
