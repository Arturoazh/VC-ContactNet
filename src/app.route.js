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
			})
			.state('rulesAndRouting', {
				abstract: true,
				templateUrl: "modules/rulesAndRouting/rulesAndRouting.html",
			})
			.state('rulesAndRouting.split', {
				url: "/rulesAndRouting",
				views: {
		      'rules': {
		        templateUrl: 'modules/rulesAndRouting/modules/rules/rules.html',
		        controller: 'rulesController'
		      },
		      'routing': {
		        templateUrl: 'modules/rulesAndRouting/modules/routing/routing.html',
		        controller: 'routingController'
		      }
		    }
			});

				
		$urlRouterProvider.otherwise("/home");
			
  }

})();