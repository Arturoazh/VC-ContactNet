var config = require('../config');
var gulp = require('gulp');
var connect    = config.connect;

exports.task = function() {

    connect.server({
        root: 'app',
        livereload: true
      });
};