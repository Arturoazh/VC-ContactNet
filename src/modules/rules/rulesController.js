(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('rulesController', controller);

  /* ngInject */
  function controller($rootScope, $scope, $cnContactNets, $cnRules, $filter){

  	$scope.contactNets = [];
    $scope.$cnRules = $cnRules;

    $rootScope.fab.trigger.action = addNew;
		$scope.addNew = addNew;

		$scope.addRoutingRule = addRoutingRule;
    $scope.save = save;

  	$cnRules.get().then(function () {
      //$scope.$cnRules.rules = arguments[0];
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
			console.log("ar");
			$cnRules.rules.unshift({
				"id": (new Date()).getTime(),
				"name": "Nuevo grupo de reglas",
				"downloadedData": true,
				"openCard": true,
			  "configModificable": false,
				"vocabulary": [],
				"routingRules": []
			});
    }

    function save(){
      console.log(arguments[0]);
    }


  }

}());
