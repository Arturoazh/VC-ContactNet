(function() {
	'use strict';

	angular
    .module('virtual-center')
    .directive('cnRepoCualification', directive);

  /* @ngInject */
  function directive($timeout) {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          downloadedData: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/cualifications/cualifications.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    	$timeout(function(){
    		scope.downloadedData = true;
    	},3000);

    }

    /* @ngInject */
    function controller ($scope) {

    	

    }
  }


}());
