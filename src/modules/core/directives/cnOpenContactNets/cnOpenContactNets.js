(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnOpenContactNets', openContactNets);

    /* @ngInject */
    function openContactNets($cnContactNets) {
    	var directive = {
	        restrict: 'EA',
	        scope: {},
	        link: link
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {

	    	element.on('click', elementClick);

	    	function elementClick(){
	    		if(arguments[0].target.localName === 'button')
	    			return;

	    		var cncontactnetinfo = JSON.parse(attr.cncontactnetinfo);
		  		angular.forEach($cnContactNets.contactNets, function () {
		  			var argsForEach = arguments;
		  			if (argsForEach[0].id == cncontactnetinfo.id) {
		  				if ($cnContactNets.contactNets[argsForEach[1]].contactNetInfo) {
		  					$cnContactNets.contactNets[argsForEach[1]].contactNetInfo = null;
		  					$cnContactNets.contactNets[argsForEach[1]].openCard = !$cnContactNets.contactNets[argsForEach[1]].openCard;
		  				}else {
		  					$cnContactNets.contactNets[argsForEach[1]].openCard = !$cnContactNets.contactNets[argsForEach[1]].openCard;
			  				$cnContactNets.getById().then(function () {
			  					console.log(arguments[0]);
			  					$cnContactNets.contactNets[argsForEach[1]].contactNetInfo = arguments[0];
								});
		  				};
		  				scope.$apply();
		  			};
		  		})
				}
	    }
    }
 
}());