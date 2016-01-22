(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnSelectAgents', directive);

    /* @ngInject */
    function directive($cnContactNets) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope : {
	        	agents : '='
	        },
	        link: link,
	        templateUrl: '/contactNetConfig/modules/core/directives/cnSelectAgents/cnSelectAgents.html',
        	controller: controller
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {
	    	console.log('cnSelectAgents', scope);
	    }

	    /* @ngInject */
	    function controller ($scope) {
	    	// console.log('cnSupervisorsConfig', $scope);

	    }
    }

 
}());