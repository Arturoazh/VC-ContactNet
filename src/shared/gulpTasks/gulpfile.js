'use strict';

var config = require('./config');

module.exports = function (gulp, appPrefix) {

  require('./tasks/browserify')(gulp, config.build, appPrefix);
  require('./tasks/html')(gulp, config.html, appPrefix);
  require('./tasks/sass')(gulp, config.sass, appPrefix);
  require('./tasks/assets')(gulp, config.assets, appPrefix);
  require('./tasks/css')(gulp, config.css, appPrefix);
  require('./tasks/jshint')(gulp, config.watch, appPrefix);
  require('./tasks/watch')(gulp, config.watch, appPrefix);

  gulp.task('shared', [
    appPrefix + 'browserify',
    appPrefix + 'html',
    appPrefix + 'sass',
    appPrefix + 'assets',
    appPrefix + 'css'
  ]);

};