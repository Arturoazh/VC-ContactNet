(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .controller('appController', controller);

  /* ngInject */
  function controller($rootScope, $scope, $timeout, $mdSidenav, $cnMenu, $cnNavigate, $location, $interval){

		$scope.toggleLeft = buildToggler('left');
		$scope.menu = {};
		$scope.cnNavigate = $cnNavigate;
		$scope.environment = {};

		$rootScope.fab = {
			isOpen: false,
			trigger: {
				icon: 'add',
				action: function(){}
			},
			actions: []
		};


		$scope.isOpenLeft = function(){
      return $mdSidenav('left').isOpen();
    };

		function buildToggler() {
			var args = arguments;
			return function() {
				$mdSidenav(args[0])
				.toggle();
			};
		}

		$cnMenu.get().then(function(){
			console.log("arguments", arguments[0]);
			$scope.menu = arguments[0];
		});

		$rootScope.$on('$stateChangeSuccess', function () {
			$rootScope.fab.isOpen = false;
			$rootScope.fab.actions = [];

			switch(arguments[1].url) {
				case '/contactnets':
					$scope.selectedIndex = 0;
					$scope.environment.actualSection = 'ContactNets';
				break;
				case '/channels':
					$scope.selectedIndex = 1;
					$scope.environment.actualSection = 'Reglas';
				break;
				case '/rules':
					$scope.selectedIndex = 2;
					$scope.environment.actualSection = 'Canales';
				break;
				case '/repos':
					$scope.selectedIndex = 3;
					$scope.environment.actualSection = 'Repositorio';
				break;
			}
		});

  }

})();
