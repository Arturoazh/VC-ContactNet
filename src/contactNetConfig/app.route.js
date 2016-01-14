(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .config(config);

  /* ngInject */
  function config($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('contactnets', {
				// url: "/",
				abstract:true,
				templateUrl: "layout.html",
				// controller: "contactNetsController"
			})
			.state('contactnets.contatNetConfig', {
				url: "/contactnets",
				templateUrl: "modules/contactNets/contactNets.html",
				controller: "contactNetsController"
			})
			.state('contactnets.channels', {
				url: "/channels",
				templateUrl: "modules/channels/channels.html",
				controller: "channelsController"
			})
			.state('contactnets.rules', {
				url: "/rules",
				templateUrl: "modules/rules/rules.html",
				controller: "rulesController"
			});

		$urlRouterProvider.otherwise("/");
			
  }

})();