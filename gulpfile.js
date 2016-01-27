'use strict';

var gulp = require('gulp');

var sharedPrefix       = 'sh-';
var multichannelPrefix = 'mt-';
var contactNetConfig   = 'cc-';

//require('./src/shared/gulpTasks/gulpfile')(gulp, sharedPrefix);
//require('./src/multichannel/gulpTasks/gulpfile')(gulp, multichannelPrefix, sharedPrefix);
//require('./src/contactNetConfig/gulpTasks/gulpfile')(gulp, contactNetConfig, sharedPrefix);
console.log(require('./src/contactNetConfig/gulpTasks/gulpfile')(gulp, contactNetConfig, sharedPrefix));

//gulp.task('default', ['multichannel', 'shared']);

gulp.task('contactNetApp', ['contactNetConfig']);