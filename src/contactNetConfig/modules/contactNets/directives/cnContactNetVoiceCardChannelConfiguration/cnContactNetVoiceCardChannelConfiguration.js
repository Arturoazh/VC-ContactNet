(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnContactNetVoiceCardChannelConfiguration', createContactNet);

    /* @ngInject */
    function createContactNet($cnContactNets) {
    	
    	var directive = {
	        restrict: 'EA',
	        link: link,
	        templateUrl: '/contactNetConfig/modules/contactNets/directives/cnContactNetVoiceCardChannelConfiguration/cnContactNetVoiceCardChannelConfiguration.html',
        	controller: controller
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {

	    }

	    /* @ngInject */
	    function controller ($scope) {

	    	// $scope = $scope.$parent;
	    	// console.log($scope);

	    }
    }

 
}());