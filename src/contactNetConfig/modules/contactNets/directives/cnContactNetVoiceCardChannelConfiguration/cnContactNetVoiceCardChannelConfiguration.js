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

	    	$scope.$cnContactNets = $cnContactNets;
	    	console.log('EN DIRECTIVA CANAL CONTACTNETS', $scope.$cnContactNets);
	    	console.log($scope);
	    	$scope.onSpeechChange = function () {
	    		console.log($scope.v);
	    		console.log('HA CAMBIADO', arguments[0]);
	    		$cnContactNets.getStreamSpeech(arguments[0]).then(function () {
	    			console.log('lalalalalalalala', arguments[0]);
	    		});
	    	}
	    	// $scope = $scope.$parent;
	    	// console.log($scope);

	    }
    }

 
}());