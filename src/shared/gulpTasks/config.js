'use strict';

var appPath      = 'src/shared';
var distPath     = './dist/shared';
var buildName    = 'shared.js';
var buildCssName = 'shared.css';
var sourcePath   = appPath + '/index.js';
var cssBuildName = 'assets.css';
var gulpIgnore   = ['!' + appPath + '/gulpTasks/**/*', '!' + appPath + '/assets/**/*.scss'];

module.exports = {

  watch: {
    appPath: appPath,
    gulpIgnore: gulpIgnore,
    distPath: distPath
  },

  jshint: {
    appPath: appPath,
    reporter: 'default'
  },

  build: {
    distPath: distPath,
    buildName: buildName,
    sourcePath: sourcePath,
    insertGlobals: false,
    debug: true
  },

  css: {
    appPath: appPath,
    cssBuildName: cssBuildName,
    distPath: distPath
  },

  sass: {
    buildName: buildCssName,
    sourcePath: appPath + '/assets/scss/*.scss',
    distPath: distPath
  },

  html: {
    appPath: appPath,
    distPath: distPath
  },

  assets: {
    appPath: appPath,
    distPath: distPath
  }
};
