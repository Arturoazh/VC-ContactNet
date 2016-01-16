(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnContactNetChatCardChannelConfiguration', createContactNet);

    /* @ngInject */
    function createContactNet($cnContactNets) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope: false,
	        link: link,
	        templateUrl: '/contactNetConfig/modules/contactNets/directives/cnContactNetChatCardChannelConfiguration/cnContactNetChatCardChannelConfiguration.html',
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