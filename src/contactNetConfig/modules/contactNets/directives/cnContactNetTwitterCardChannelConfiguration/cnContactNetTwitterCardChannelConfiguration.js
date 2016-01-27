(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnContactNets) {

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
