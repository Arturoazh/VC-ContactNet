(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnContactNets) {
  	
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