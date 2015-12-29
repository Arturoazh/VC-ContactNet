(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .controller('appController', controller);

  /* ngInject */
  function controller($rootScope, $scope, $timeout, $mdSidenav, $cnMenu, $cnNavigate, $location){

		$scope.toggleLeft = buildToggler('left');
		$scope.menu = {};
		$scope.cnNavigate = $cnNavigate;


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

		$rootScope.$on('$stateChangeSuccess', function () {
			console.log('af', arguments);
			switch(arguments[1].url) {
				case '/contactnets':
					$scope.selectedIndex = 0;
				break;
				case '/channels':
					$scope.selectedIndex = 1;
				break;
			}
		});

  }

})();
