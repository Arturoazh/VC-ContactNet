'use strict';

var changed = require('gulp-changed');

module.exports = function (gulp, config, appPrefix) {

  gulp.task(appPrefix + 'html', function () {
    return gulp.src(config.appPath + '/**/*.html')
      .pipe(changed(config.distPath))
      .pipe(gulp.dest(config.distPath));
  });

};
