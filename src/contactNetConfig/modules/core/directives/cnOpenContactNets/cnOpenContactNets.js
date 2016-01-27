(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnContactNets) {
  	var directive = {
        restrict: 'EA',
        scope: {
					contactNet : '=cnContactNetInfo'
				},
        link: link
    };

    return directive;


    function link(scope, element, attr, ctrl) {

    	element.on('click', elementClick);

    	function elementClick(){

    		// if(arguments[0].target.localName === 'button')
    		// 	return;

    		var cncontactnetinfo = scope.contactNet;
	  		angular.forEach($cnContactNets.contactNets, function () {
	  			var argsForEach = arguments;
	  			if (argsForEach[0].id == cncontactnetinfo.id) {
	  				if ($cnContactNets.contactNets[argsForEach[1]].contactNetInfo) {
	  					$cnContactNets.contactNets[argsForEach[1]].contactNetInfo = null;
	  					$cnContactNets.contactNets[argsForEach[1]].openCard = !$cnContactNets.contactNets[argsForEach[1]].openCard;
	  				}else {
	  					$cnContactNets.contactNets[argsForEach[1]].openCard = !$cnContactNets.contactNets[argsForEach[1]].openCard;
		  				$cnContactNets.getById(cncontactnetinfo.id).then(function () {
		  					console.log('ELEMENT', arguments[0]);
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
