(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('channelsController', controller);

  /* ngInject */
  function controller($scope, $cnContactNets){

  	$scope.contactNetsService = $cnContactNets;

  	$cnContactNets.get().then(function () {
  		$cnContactNets.contactNets = arguments[0];
  		// console.log('contactNets', arguments[0]);
  	});

  }

}());

