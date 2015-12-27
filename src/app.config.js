(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .config(config);

  /* ngInject */
  function config($mdThemingProvider, $mdIconProvider){

		$mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('deep-orange')
	    .warnPalette('red');


	  $mdIconProvider
       .icon('add', 'assets/icons/add.svg')
       .icon('menu', 'assets/icons/menu.svg');
			
  }

})();