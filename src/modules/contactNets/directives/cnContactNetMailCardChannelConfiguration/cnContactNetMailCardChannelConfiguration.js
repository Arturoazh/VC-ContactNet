(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnContactNetMailCardChannelConfiguration', createContactNet);

    /* @ngInject */
    function createContactNet($cnContactNets) {

    	var directive = {
	        restrict: 'EA',
	        scope: false,
	        link: link,
	        templateUrl: 'modules/contactNets/directives/cnContactNetMailCardChannelConfiguration/cnContactNetMailCardChannelConfiguration.html',
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