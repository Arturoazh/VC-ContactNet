(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .controller('appController', controller);

  /* ngInject */
  function controller($scope, $mdSidenav, $log, $cnMocks){

	$scope.toggleLeft = buildToggler('left');

	function buildToggler() {
		var args = arguments;
		return function() {
			$mdSidenav(args[0])
			.toggle()
			.then(function () {
				$log.debug("toggle " + args[0] + " is done");
			});
		}
	}

	$scope.menu = $cnMocks.menu;
  }

})();
