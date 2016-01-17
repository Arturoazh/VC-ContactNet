(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('contactNetsController', controller);

  /* ngInject */
  function controller($rootScope, $scope, $cnContactNets, $cnCreateContactNet){

  	$scope.contactNetsService = $cnContactNets;
    $rootScope.fab.trigger.action = $cnCreateContactNet.createContactNet;

  	$cnContactNets.get().then(function () {
      // console.log(arguments[0]);
  		$cnContactNets.contactNets = arguments[0];
      // $cnContactNets.contactNets = [];

  	});

  }

}());

