(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnContactNets) {
  	
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
    	console.log('voiceCard', scope);
    }

    /* @ngInject */
    function controller ($scope) {

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