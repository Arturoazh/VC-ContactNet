(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('channelsController', controller);

  /* ngInject */
	function controller($rootScope, $scope, $cnContactNets, $cnChannels, $filter){

  	$scope.contactNets = [];
    $scope.$cnChannels = $cnChannels;

		$scope.save = save;
		$scope.openFab = openFab;

    $rootScope.fab.trigger.action = false;
		$rootScope.fab.actions = [{
			icon: 'phone',
			action: newPhone
		},{
			icon: 'message',
			action: newChat
		},{
			icon: 'mail',
			action: newMail
		}];

  	$cnChannels.get().then(function () {
      //$scope.$cnChannels.channels = arguments[0];
  	});


		function newPhone(){
			$cnChannels.channels.unshift({
				"multimedia": "Nuevo Phone",
				"downloadedData": true,
				"openCard": true,
			  "multimediaId": (new Date()).getTime(),
			  "channelId": 1,
			  "configModificable": false
			});
		}

		function newChat(){
			$cnChannels.channels.unshift({
				"multimedia": "Nuevo Chat",
				"downloadedData": true,
				"openCard": true,
			  "multimediaId": (new Date()).getTime(),
			  "channelId": 2,
			  "configModificable": false
			});
		}

		function newMail(){
			$cnChannels.channels.unshift({
				"multimedia": "Nuevo Mail",
				"downloadedData": true,
				"openCard": true,
			  "multimediaId": (new Date()).getTime(),
			  "channelId": 3,
			  "configModificable": false
			});
		}

		function openFab(){
			$rootScope.fab.isOpen = true;
		}

    function save(){
      console.log(arguments[0]);
    }


  }

}());
