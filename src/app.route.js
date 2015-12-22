(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .config(config);

  /* ngInject */
  function config($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "modules/home/home.html",
				controller: "homeController"
			});

		$urlRouterProvider.otherwise("/home");
			
  }

})();