(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnChannels) {
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
	  			if (argsForEach[0].multimediaId == scope.channel.multimediaId) {
	  				if ($cnChannels.channels[argsForEach[1]].downloadedData) {
	  					$cnChannels.channels[argsForEach[1]].openCard = !$cnChannels.channels[argsForEach[1]].openCard;
	  				}else {
	  					$cnChannels.channels[argsForEach[1]].openCard = !$cnChannels.channels[argsForEach[1]].openCard;
	  					$cnChannels.channels[argsForEach[1]].downloadedData = true;
		  			// 	$cnChannels.getById($cnChannels.channels[argsForEach[1]].multimediaId).then(function () {
		  			// 		$cnChannels.channels[argsForEach[1]] = arguments[0][0];
		  			// 		$cnChannels.channels[argsForEach[1]].downloadedData = true;
		  			// 		$cnChannels.channels[argsForEach[1]].openCard = !$cnChannels.channels[argsForEach[1]].openCard;
		  			// 		console.log($cnChannels.channels, $cnChannels.channels[argsForEach[1]]);
							// });
	  				};
	  				scope.$apply();
	  			};
	  		})
			}
    }
  }

}());
