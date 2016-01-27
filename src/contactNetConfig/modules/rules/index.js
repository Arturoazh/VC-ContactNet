(function () {

	'use strict';

	module.exports = angular.module('cnRules', [])
		.controller('rulesController', require('./rulesController.js'))
		.directive('cnSelectOrderContactNet', require('./directives/selectOrderContactNet/selectOrderContactNet.js'))
		.directive('cnSelectLanguages', require('./directives/selectLanguages/selectLanguages.js'))
		.directive('cnRoutingRules', require('./directives/routingRules/routingRules.js'))
		.directive('cnCategorization', require('./directives/categorization/categorization.js'))
	;
	
}());