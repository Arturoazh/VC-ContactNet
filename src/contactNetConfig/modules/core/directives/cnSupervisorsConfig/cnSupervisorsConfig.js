(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnSupervisorsConfig', directive);

    /* @ngInject */
    function directive($cnContactNets) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope : {
	        	contactnet : '='
	        },
	        link: link,
	        templateUrl: '/contactNetConfig/modules/core/directives/cnSupervisorsConfig/cnSupervisorsConfig.html',
        	controller: controller
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {
	    	$cnContactNets.getSupervisors().then(function () {
	    		console.log('getSupervisors', arguments[0]);
			    scope.contactnet.contactNetInfo.supervisors = arguments[0];
	    	});
	    }

	    /* @ngInject */
	    function controller ($scope) {
	    	console.log('cnSupervisorsConfig', $scope);

	    }
    }

 
}());