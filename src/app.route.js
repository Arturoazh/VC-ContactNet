(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .config(config);

  /* ngInject */
  function config($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('contactnets', {
				url: "/contactnets",
				templateUrl: "modules/home/home.html",
				controller: "homeController"
			})
			.state('channels', {
				url: "/channels",
				templateUrl: "modules/channels/channels.html",
				controller: "channelsController"
			});

		$urlRouterProvider.otherwise("/contactnets");
			
  }

})();