(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnContactNetVoiceCardChannelConfiguration', createContactNet);

    /* @ngInject */
    function createContactNet($cnContactNets) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope : {
	        	contactnet : '=',
	        	ngModel: '='
	        },
	        link: link,
	        templateUrl: '/contactNetConfig/modules/contactNets/directives/cnContactNetVoiceCardChannelConfiguration/cnContactNetVoiceCardChannelConfiguration.html',
        	controller: controller
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {

	    }

	    /* @ngInject */
	    function controller ($scope) {

	    	console.log($scope);
	    	$scope.onSpeechChange = function () {
	    		console.log($scope.contactnet);
	    		console.log('HA CAMBIADO', arguments[0]);
	    		$cnContactNets.getStreamSpeech(arguments[0]).then(function () {
	    			// console.log('lalalalalalalala', arguments[0]);
	    		});
	    	}

	    	$cnContactNets.getStrategies($scope.contactnet.contactNetInfo.voiceChannelParams.channelId).then(function () {
	    		$scope.contactnet.contactNetInfo.voiceChannelParams.strategies = arguments[0];
	    		console.log('getStrategies', arguments[0]);
	    	});

	    }
    }

 
}());