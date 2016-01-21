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
	    	$scope.contactnet.contactNetInfo.voiceChannelParams.notifications = $scope.contactnet.contactNetInfo.voiceChannelParams.notifications || [];
	    	$scope.contactnet.contactNetInfo.voiceChannelParams.outgoingConfiguration = $scope.contactnet.contactNetInfo.voiceChannelParams.outgoingConfiguration || {};
	    	($scope.contactnet.contactNetInfo.voiceChannelParams.outgoingConfiguration.outgoingConfig = $scope.contactnet.contactNetInfo.voiceChannelParams.outgoingConfiguration.outgoingConfig || []);

	    	$cnContactNets.getStrategies($scope.contactnet.contactNetInfo.voiceChannelParams.channelId).then(function () {
	    		$scope.contactnet.contactNetInfo.voiceChannelParams.strategies = arguments[0];
	    		console.log('getStrategies', arguments[0]);
	    	});

	    	$cnContactNets.getOutGoingNumbering().then(function () {
	    		$scope.contactnet.contactNetInfo.voiceChannelParams.ani = arguments[0];
	    		console.log('getOutGoingNumbering', arguments[0]);
	    	});

	    	$cnContactNets.getSpeech().then(function () {
					console.log('SPEECHS', arguments[0]);
					$scope.contactnet.contactNetInfo.voiceChannelParams.speechs = arguments[0];
				});

				$cnContactNets.getOutGoing().then(function () {
					console.log('getOutGoing', arguments[0]);
					$scope.contactnet.contactNetInfo.voiceChannelParams.outGoing = arguments[0];
				});

				$scope.onSpeechChange = function () {
	    		console.log($scope.contactnet);
	    		console.log('HA CAMBIADO', arguments[0]);
	    			arguments[0] && $cnContactNets.getStreamSpeech(arguments[0]).then(function () {
		    			// console.log('lalalalalalalala', arguments[0]);
		    		});
	    	};

				$scope.onTypeNotificationChange = function () {
					var args = arguments;
					console.log('arguments onTypeNotificationChange', args);
					var call = {
						'ADVERTISEMENT' : 'getSpeech',
						'QUEUEMEMBER_POSITION' : 'getVoices',
						'QUEUEMEMBER_TIME' : 'getVoices'
					}
					$cnContactNets[call[args[0]]](args[0]).then(function () {
						console.log('arguments '+call[args[0]], arguments[0]);
						args[1].selectConfig = arguments[0];
					});
				}

	    }
    }

 
}());