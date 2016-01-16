(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnContactNetTwitterCardChannelConfiguration', createContactNet);

    /* @ngInject */
    function createContactNet($cnContactNets) {

    	var directive = {
	        restrict: 'EA',
	        scope: false,
	        link: link,
	        templateUrl: '/contactNetConfig/modules/contactNets/directives/cnContactNetTwitterCardChannelConfiguration/cnContactNetTwitterCardChannelConfiguration.html',
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
