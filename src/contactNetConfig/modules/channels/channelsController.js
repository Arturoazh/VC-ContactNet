(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('channelsController', controller);

  /* ngInject */
	function controller($rootScope, $scope, $cnContactNets, $cnChannels, $filter){

  	$scope.contactNets = [];
  	$scope.colorOptions = ['FFFFFF', 'FF8A80', 'FFD180', 'FFFF8D', 'CFD8DC', '80D8FF', 'A7FFEB', 'CCFF90'];
  	$scope.scriptCode = '<script>console.log("empty");</script>'
    $scope.$cnChannels = $cnChannels;

		$scope.save = save;
		$scope.openFab = openFab;

    $rootScope.fab.trigger.action = function(){};
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
			  "configModificable": false,
			  "multimediaParams": {
					"ChatType":"Chat",
					"ChatConfig":{
						"templateId":1,
						"authenticationText":"",
						"authenticationMode":"anonymous",
						"loadingMode":"closed",
						"headerText":"",
						"welcomeText":"",
						"resetText":"",
						"connectText":"",
						"primaryBackgroundColor":"CCCCCC",
						"secundaryBackgroundColor":"FF0000",
						"primaryColor":"000000",
						"secundaryColor":"FFFFFF"
					}
				}
			});
		}

		function newMail(){
			$cnChannels.channels.unshift({
				"multimedia": "Nuevo Mail",
				"downloadedData": true,
				"openCard": true,
			  "multimediaId": (new Date()).getTime(),
			  "channelId": 3,
			  "configModificable": false,
			  "multimediaParams": {
					"MailType":"SendGrid",
					"MailConfig":{
						
					}
				}
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
