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
				templateUrl: "/contactNetConfig/layout.html",
				// controller: "contactNetsController"
			})
			.state('contactnets.contatNetConfig', {
				url: "/contactnets",
				templateUrl: "/contactNetConfig/modules/contactNets/contactNets.html",
				controller: "contactNetsController"
			})
			.state('contactnets.channels', {
				url: "/channels",
				templateUrl: "/contactNetConfig/modules/channels/channels.html",
				controller: "channelsController"
			})
			.state('contactnets.rules', {
				url: "/rules",
				templateUrl: "/contactNetConfig/modules/rules/rules.html",
				controller: "rulesController"
			})
			.state('contactnets.repos', {
				url: "/repos",
				templateUrl: "/contactNetConfig/modules/repos/repos.html",
				controller: "reposController"
			});

		$urlRouterProvider.otherwise("/contactnets");
			
  }

})();