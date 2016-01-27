(function () {

	'use strict';

	module.exports = angular.module('cnCore', [])
		.controller('appController', require('./core.controller.js'))
		.service('$cnSkills', require('./services/cnSkills.js'))
		.service('$cnRules', require('./services/cnRules.js'))
		.service('$cnRepos', require('./services/cnRepos.js'))
		.service('$cnQualifications', require('./services/cnQualifications.js'))
		.service('$cnPauseStatus', require('./services/cnPauseStatus.js'))
		.service('$cnMenu', require('./services/cnMenu.js'))
		.service('$cnLanguages', require('./services/cnLanguages.js'))
		.service('$cnChannels', require('./services/cnChannels.js'))
		.service('$cnContactNets', require('./services/cnContactNets.js'))
		.service('$cnCategories', require('./services/cnCategories.js'))
		.service('$cnMocks', require('./services/mocks/mocksService.js'))
		.service('$cnNavigate', require('./services/cnNavigate.js'))
		.service('$cnCreateContactNet', require('./services/cnCreateContactNet.js'))
		.directive('cnSupervisorsConfig', require('./directives/cnSupervisorsConfig/cnSupervisorsConfig.js'))
		.directive('cnSelectAgents', require('./directives/cnSelectAgents/cnSelectAgents.js'))
		.directive('cnScroll', require('./directives/cnScroll/cnScroll.js'))
		.directive('cnOpenRules', require('./directives/cnOpenRules/cnOpenRules.js'))
		.directive('cnOpenContactNets', require('./directives/cnOpenContactNets/cnOpenContactNets.js'))
		.directive('cnOpenChannels', require('./directives/cnOpenChannels/cnOpenChannels.js'))
		.directive('cnNavigate', require('./directives/cnNavigate/cnNavigate.js'))
		.directive('cnCreateRule', require('./directives/cnCreateRule/cnCreateRule.js'))
		.directive('cnCreateContactNet', require('./directives/cnCreateContactNet/cnCreateContactNet.js'))
		.directive('cnCopy', require('./directives/cnCopy/cnCopy.js'))
		.directive('cnColorPicker', require('./directives/cnColorPicker/cnColorPicker.js'))
		.directive('cnAudio', require('./directives/cnAudio/cnAudio.js'))
		.directive('cnAgentsBySupervisor', require('./directives/cnAgentsBySupervisor/cnAgentsBySupervisor.js'))
	;
	
}());