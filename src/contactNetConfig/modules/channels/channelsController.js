(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('channelsController', controller);

  /* ngInject */
	function controller($rootScope, $scope, $cnContactNets, $cnChannels, $filter, $mdDialog){

  	$scope.contactNets = [];
  	$scope.colorOptions = ['FFFFFF', 'FF8A80', 'FFD180', 'FFFF8D', 'CFD8DC', '80D8FF', 'A7FFEB', 'CCFF90'];
  	$scope.scriptCode = '<script>console.log("empty");</script>'
    $scope.$cnChannels = $cnChannels;

		$scope.save = save;
		$scope.remove = remove;
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
      $scope.$cnChannels.channels = arguments[0];
  	});


		function newPhone(){
			var args = arguments;
			$mdDialog.show(
	      $mdDialog.alert()
	        .clickOutsideToClose(true)
	        .title('Acción no permitida')
	        .textContent('Para contratar un nuevo canal telefónico deberá contactar con su proveedor de servicios.')
	        .ariaLabel('Alert dialog')
	        .ok('Cerrar')
	        .targetEvent(args[0])
	    );
		}

		function newChat(){
			$cnChannels.channels.unshift({
				"multimedia": "Nuevo Chat",
				"downloadedData": true,
				"openCard": true,
			  "multimediaId": (new Date()).getTime(),
			  "channelId": 2,
			  "configModificable": true,
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
			  "configModificable": true,
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
    	var item = angular.copy(arguments[0]);
    	delete item.openCard;
      $cnChannels.save(item);
    }

    function remove(){
    	var args = arguments;
    	$cnChannels.remove($scope.$cnChannels.channels[args[0]].multimediaId).then(function(){
        $scope.$cnChannels.channels.splice(args[0], 1);  
      });
    }


  }

}());
