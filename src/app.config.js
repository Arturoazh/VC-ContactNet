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
      .icon('arrow_downward', 'assets/icons/arrow_downward.svg')
      .icon('arrow_upward', 'assets/icons/arrow_upward.svg')
      .icon('menu', 'assets/icons/menu.svg')
      .icon('more_vert', 'assets/icons/more_vert.svg')
      .icon('contactnets', 'assets/icons/contactnets.svg')
      .icon('channels', 'assets/icons/channels.svg')
      .icon('rules', 'assets/icons/rules.svg')
      .icon('mail', 'assets/icons/mail.svg')
      .icon('message', 'assets/icons/message.svg')
      .icon('phone', 'assets/icons/phone.svg')
      .icon('shape', 'assets/icons/shape.svg')
      .icon('insert', 'assets/icons/insert-drive-file.svg')
      .icon('mode-edit', 'assets/icons/mode-edit.svg');
			
  }

})();