(function () {
	'use strict';

	module.exports = angular.module('cnContactNets', [])
		.controller('contactNetsController', require('./contactNetsController.js'))
		.directive('cnContactnetSkills', require('./directives/skills/skills.js'))
		.directive('cnContactnetQualifications', require('./directives/qualifications/qualifications.js'))
		.directive('cnContactnetPauseStates', require('./directives/pauseStates/pauseStates.js'))
		.directive('cnContactNetVoiceCardChannelConfiguration', require('./directives/cnContactNetVoiceCardChannelConfiguration/cnContactNetVoiceCardChannelConfiguration.js'))
		.directive('cnContactNetChatCardChannelConfiguration', require('./directives/cnContactNetChatCardChannelConfiguration/cnContactNetChatCardChannelConfiguration.js'))
		.directive('cnContactNetMailCardChannelConfiguration', require('./directives/cnContactNetMailCardChannelConfiguration/cnContactNetMailCardChannelConfiguration.js'))
		.directive('cnContactNetChannelsConfig', require('./directives/cnContactNetChannelsConfig/cnContactNetChannelsConfig.js'))
		.directive('cnContactnetBackoffice', require('./directives/cnContactnetBackoffice/cnContactnetBackoffice.js'))
		.directive('cnContactnetCategorizations', require('./directives/categorizations/categorizations.js'))
	;

}());