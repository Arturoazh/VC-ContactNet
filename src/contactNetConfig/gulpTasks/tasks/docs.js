'use strict';

var gulp = require('gulp');
var config = require('../config');
var ngdocs = require('gulp-ngdocs');

module.exports = function (gulp, appPrefix) {

	var options = {
    // scripts: [
    //   'app/js/app.min.js',
    //   'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js',
    //   'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-animate.min.js',
    //   'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.min.js',
    //   'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-touch.min.js',
    //   'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-sanitize.min.js',
    //   'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-aria.min.js',
    //   'https://ajax.googleapis.com/ajax/libs/angular_material/0.11.0/angular-material.min.js'
    // ],
    html5Mode: false,
    startPage: '/api',
    title: "Virtual Center Docs",
    // image: "img.png",
    imageLink: "http://www.virtualcenter360.es/",
    titleLink: "#/api"
  }

  gulp.task(appPrefix + 'docs', function () {
    gulp.src(config.jsFiles)
	    .pipe(ngdocs.process(options))
	    .pipe(gulp.dest('docs/contactNetConfig'));
    });

};
