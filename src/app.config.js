(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .config(config);

  /* ngInject */
  function config($mdThemingProvider, $mdIconProvider){

		$mdThemingProvider.theme('default')
	    .primaryPalette('grey')
	    .accentPalette('blue')
	    .warnPalette('red');


	  $mdIconProvider
      .icon('add', 'assets/icons/add.svg')
      .icon('menu', 'assets/icons/menu.svg')
      .icon('more_vert', 'assets/icons/more_vert.svg')
      .icon('contactnets', 'assets/icons/people.svg')
      .icon('channels', 'assets/icons/contact-phone.svg')
      .icon('rules', 'assets/icons/playlist-play.svg')
      .icon('mail', 'assets/icons/mail.svg')
      .icon('message', 'assets/icons/message.svg')
      .icon('phone', 'assets/icons/phone.svg');
			
  }

})();