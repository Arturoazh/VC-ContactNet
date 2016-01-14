(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('contactNetsController', controller);

  /* ngInject */
  function controller($scope, $cnContactNets){

  	$scope.contactNetsService = $cnContactNets;

  	$cnContactNets.get().then(function () {
  		$cnContactNets.contactNets = arguments[0];
      // $cnContactNets.contactNets = [];

  	});

  }

}());

