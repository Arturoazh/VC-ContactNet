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

		// $rootScope.$on('$viewContentLoaded', function () {
		// 	$timeout(function () {
		// 		var body = document.body
	 //      if(body.classList.contains('disable-hover'))
	 //        body.classList.remove('disable-hover');
		// 	}, 650);
		// });

  }

})();
