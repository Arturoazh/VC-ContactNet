(function(){
	'use strict';

  /* @ngInject */
  module.exports =  function ($rootScope, $scope, $cnContactNets, $cnRules, $filter, $cnChannels, $mdDialog){

  	$scope.contactNets = [];
    $scope.$cnRules = $cnRules;

    $rootScope.fab.trigger.action = addNew;
		$scope.addNew = addNew;

		$scope.addRoutingRule = addRoutingRule;
    $scope.save = save;
    $scope.duplicate = duplicate;
    $scope.remove = remove;

    
    if(!$scope.$cnRules.rules.length){
      $scope.loading = true;
    }

  	$cnRules.get().then(function () {
      $scope.$cnRules.rules = arguments[0];
      $scope.loading = false;
  	});


		function addRoutingRule(){
			arguments[0].routingRules.push({
				"name": 'nueva regla',
				"openCard": true,
				"destinations": [],
				"rules": []
			});
		}

    function addNew(){
      var args = arguments;
			$cnChannels.get().then(function(){
        if(arguments[0].length){
          $cnRules.rules.unshift({
            "id": (new Date()).getTime(),
            "newItem": true,
            "name": "Nuevo grupo de reglas",
            "downloadedData": true,
            "openCard": true,
            "configModificable": false,
            "modificable": true,
            "vocabulary": [],
            "routingRules": []
          });  
        }else{
          $mdDialog.show(
            $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('Acción no permitida')
              .textContent('Para crear una regla es necesario tener al menos un canal creado.')
              .ariaLabel('Alert dialog')
              .ok('Cerrar')
              .targetEvent(args[0])
          );
        }          
      });
			
    }

    function save(){
      var args = arguments;
      if(args[0].newItem){
        args[0].id = -1;
      }
      $cnRules.save(arguments[0]).then(function(){
        arguments[0].downloadedData = true;
        args[0] = arguments[0];
      });
    }

    function remove(){
      var args = arguments;
      $cnRules.remove(arguments[0]).then(function(){
        $cnRules.rules.splice($cnRules.rules.indexOf(args[1]), 1);  
      });
    }

    function duplicate(){
      var args = arguments;
      //TODO: Input dialog asking for new config name
      $cnRules.duplicate(arguments[0].id, "Copia de "+arguments[0].name).then(function(){
        // arguments[0].openCard = true;
        arguments[0].downloadedData = true;
        $cnRules.rules.unshift(arguments[0]);
      });
    }


  }

}());
