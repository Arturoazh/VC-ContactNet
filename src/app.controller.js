(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .controller('appController', controller);

  /* ngInject */
  function controller($scope, $mdSidenav, $cnMenu){

		$scope.toggleLeft = buildToggler('left');
		$scope.menu = {};


		$scope.isOpenLeft = function(){
      return $mdSidenav('left').isOpen();
    };

		function buildToggler() {
			var args = arguments;
			return function() {
				$mdSidenav(args[0])
				.toggle();
			}
		}

		$cnMenu.get().then(function(){
			console.log("arguments", arguments[0]);
			$scope.menu = arguments[0];	
		})
		

  }

})();
