(function () {

	'use strict';

	module.exports = angular.module('cnRepos', [])
		.controller('reposController', require('./reposController.js'))
		.directive('cnRepoSkills', require('./directives/skills/skills.js'))
		.directive('cnRepoQualifications', require('./directives/qualifications/qualifications.js'))
		.directive('cnRepoPauseStates', require('./directives/pauseStates/pauseStates.js'))
		.directive('cnRepoCategorizations', require('./directives/categorizations/categorizations.js'))
	;
	
}());