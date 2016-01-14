(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnOpenChannels', directive);

    /* @ngInject */
    function directive($cnChannels) {
    	var directiveObj = {
	        restrict: 'EA',
	        scope: {
						channel: '=cnChannelInfo'
					},
	        link: link
	    };

	    return directiveObj;


	    function link(scope, element, attr, ctrl) {

	    	element.on('click', elementClick);

	    	function elementClick(){
					
	    		if(arguments[0].target.localName === 'button')
	    			return;

		  		angular.forEach($cnChannels.channels, function () {

		  			var argsForEach = arguments;
		  			if (argsForEach[0].channelId == scope.channel.channelId) {
		  				if ($cnChannels.channels[argsForEach[1]].downloadedData) {
		  					$cnChannels.channels[argsForEach[1]].openCard = !$cnChannels.channels[argsForEach[1]].openCard;
		  				}else {
		  					$cnChannels.channels[argsForEach[1]].openCard = !$cnChannels.channels[argsForEach[1]].openCard;
			  				$cnChannels.getById().then(function () {
			  					$cnChannels.channels[argsForEach[1]] = arguments[0][0];
			  					$cnChannels.channels[argsForEach[1]].downloadedData = true;
			  					$cnChannels.channels[argsForEach[1]].openCard = !$cnChannels.channels[argsForEach[1]].openCard;
			  					console.log($cnChannels.channels, $cnChannels.channels[argsForEach[1]]);
								});
		  				};
		  				scope.$apply();
		  			};
		  		})
				}
	    }
    }

}());
