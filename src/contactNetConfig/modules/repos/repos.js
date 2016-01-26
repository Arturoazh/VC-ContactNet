(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('reposController', controller);

  /* ngInject */
	function controller($rootScope, $scope, $cnContactNets, $cnChannels, $filter, $cnRepos){

		$scope.repos = {};

		$scope.save = save;
		$scope.open = open;

		$rootScope.fab.hide = true;

    $cnRepos.get().then(function(){
      $scope.repos = arguments[0];
    });

 	
  	function open(){
  		$scope.repos[arguments[0]].downloadedData = false;
  		$scope.repos[arguments[0]].openCard = !$scope.repos[arguments[0]].openCard;
  	}

    function save(){
      console.log(arguments[0]);
    }


  }

}());
