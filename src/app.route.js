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
				templateUrl: "modules/contactNets/contactNets.html",
				controller: "contactNetsController"
			})
			.state('channels', {
				url: "/channels",
				templateUrl: "modules/channels/channels.html",
				controller: "channelsController"
			})
			.state('rules', {
				url: "/rules",
				templateUrl: "modules/rules/rules.html",
				controller: "rulesController"
			});

		$urlRouterProvider.otherwise("/contactnets");
			
  }

})();