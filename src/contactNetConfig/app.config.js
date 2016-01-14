(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .config(config);

  /* ngInject */
  function config($mdThemingProvider, $mdIconProvider){

		var blueVCmap = $mdThemingProvider.extendPalette('blue', {
			'100': '#E0F2FA',
			'200': '#AFDDF3',
			'300': '#71C3E9',
			'400': '#57B7E5',
	    '500': '#3CACE1',
			'600': '#22A1DC',
			'700': '#1E8DC2',
			'800': '#1A7AA7',
			'900': '#16678D',
			'A100': '#AFDDF3',
			'A200': '#3CACE1',
			'A400': '#57B7E5',
			'A700': '#1E8DC2'
	  });
	  $mdThemingProvider.definePalette('blueVC', blueVCmap);

		$mdThemingProvider.theme('default')
	    .primaryPalette('grey')
	    .accentPalette('blueVC')
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
			.icon('twitter', 'assets/icons/twitter.svg')
      .icon('mail', 'assets/icons/mail.svg')
      .icon('message', 'assets/icons/message.svg')
      .icon('phone', 'assets/icons/phone.svg')
      .icon('shape', 'assets/icons/shape.svg')
      .icon('insert', 'assets/icons/insert-drive-file.svg')
      .icon('edit', 'assets/icons/edit.svg')
			.icon('delete', 'assets/icons/delete.svg');

  }

})();
