(function(){
	"use strict";

	/* @ngInject */
  module.exports = function ($mdThemingProvider, $mdIconProvider){

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
	    .warnPalette('red')
	    ;


	  $mdIconProvider
      .icon('add', '/contactNetConfig/assets/icons/add.svg')
      .icon('arrow_downward', '/contactNetConfig/assets/icons/arrow_downward.svg')
      .icon('arrow_upward', '/contactNetConfig/assets/icons/arrow_upward.svg')
      .icon('menu', '/contactNetConfig/assets/icons/menu.svg')
      .icon('more_vert', '/contactNetConfig/assets/icons/more_vert.svg')
      .icon('contactnets', '/contactNetConfig/assets/icons/contactnets.svg')
      .icon('channels', '/contactNetConfig/assets/icons/channels.svg')
      .icon('rules', '/contactNetConfig/assets/icons/rules.svg')
			.icon('twitter', '/contactNetConfig/assets/icons/twitter.svg')
      .icon('mail', '/contactNetConfig/assets/icons/mail.svg')
      .icon('message', '/contactNetConfig/assets/icons/message.svg')
      .icon('phone', '/contactNetConfig/assets/icons/phone.svg')
      .icon('shape', '/contactNetConfig/assets/icons/shape.svg')
      .icon('insert', '/contactNetConfig/assets/icons/insert-drive-file.svg')
      .icon('edit', '/contactNetConfig/assets/icons/edit.svg')
      .icon('search', '/contactNetConfig/assets/icons/search.svg')
			.icon('delete', '/contactNetConfig/assets/icons/delete.svg')
			.icon('repos', '/contactNetConfig/assets/icons/repos.svg')
			.icon('skills', '/contactNetConfig/assets/icons/skills.svg')
			.icon('pause_state', '/contactNetConfig/assets/icons/pause_state.svg')
			.icon('school', '/contactNetConfig/assets/icons/school.svg')
			.icon('local_offer', '/contactNetConfig/assets/icons/local_offer.svg')
			.icon('content_copy', '/contactNetConfig/assets/icons/content_copy.svg')
			;

  }

})();
