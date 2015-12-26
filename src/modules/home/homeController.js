(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .controller('homeController', controller);

  /* ngInject */
  function controller($scope, $cnContactNets){

  	$scope.contactNets = {};

  	$cnContactNets.get().then(function () {
  		$scope.contactNets = arguments[0];
  		console.log('contactNets', arguments[0]);
  	});

  	$scope.openContactNet = function(){

  		var args = arguments;
  		angular.forEach($scope.contactNets, function () {
  			var argsForEach = arguments;
  			if (argsForEach[0].id == args[0].id) {
  				if ($scope.contactNets[argsForEach[1]].contactNetInfo) {
  					$scope.contactNets[argsForEach[1]].contactNetInfo = null;
  					$scope.contactNets[argsForEach[1]].openCard = !$scope.contactNets[argsForEach[1]].openCard;
  				}else {
  					$scope.contactNets[argsForEach[1]].openCard = !$scope.contactNets[argsForEach[1]].openCard;
	  				$cnContactNets.getById().then(function () {
	  					console.log(arguments[0]);
	  					$scope.contactNets[argsForEach[1]].contactNetInfo = arguments[0];
						});
  				};
  				
  			};
  		})

	  };

  }

})();

