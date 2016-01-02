(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('rulesController', controller);

  /* ngInject */
  function controller($rootScope, $scope, $cnContactNets, $cnRules, $filter){

  	$scope.contactNets = [];
    $scope.$cnRules = $cnRules;

    $rootScope.addNew = addNew;
    $scope.save = save;

  	$cnRules.get().then(function () {
      $scope.$cnRules.rules = arguments[0];
  	});

    

    function addNew(){
      console.log("ejemplo");
    }

    function save(){
      console.log(arguments[0]);
    }


  }

}());

