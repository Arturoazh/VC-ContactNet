(function () {
	'use strict';

	angular
	.module('virtual-center')
	.controller('appController', controller);

	/* ngInject */
	function controller ($rootScope, $scope) {
		console.log($rootScope);
	}
	
}());