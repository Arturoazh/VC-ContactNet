(function() {
	'use strict';
	
  /* @ngInject */
  module.exports = function ($cnContactNets, $filter) {

  	var directive = {
        restrict: 'EA',
        scope: {
        	rule: '=cnRule',
					channelId: '=cnChannelId'
        },
        templateUrl: '/contactNetConfig/modules/rules/directives/selectOrderContactNet/selectOrderContactNet.html',
        link: link
    };

    return directive;


    function link(scope, element, attr, ctrl) {

    	var contactNetsRaw = [];

    	scope.contactNets = [];
    	scope.moveContactNet = moveContactNet;
    	scope.selectCN = selectCN;

    	$cnContactNets.get().then(function () {
        contactNetsRaw = arguments[0];

        orderContactNets();
      });


    	function orderContactNets(){
    		var contactNetsOrder = [];

    		angular.forEach(scope.rule.destinations, function(){

        	var contactNet = angular.copy( $filter('filter')(contactNetsRaw, {id: arguments[0]}) );
        	if(contactNet.length){
        		contactNet[0].selected = true;
      			contactNetsOrder.push(contactNet[0]);
        	}
        });

        angular.forEach(contactNetsRaw, function(){
        	if(!~scope.rule.destinations.indexOf(arguments[0].id)){
        		contactNetsOrder.push(arguments[0]);
        	}
        });



        scope.contactNets = contactNetsOrder;

    	}

    	function selectCN(){
    		if(arguments[0].selected){
    			scope.rule.destinations.push(arguments[0].id);
    		}else{
    			scope.rule.destinations.splice(scope.rule.destinations.indexOf(arguments[0].id), 1);
    		}

    		orderContactNets();
    	};

      /*
	    * @param {Object} contactNet
	    * @param {boolean} action true: up, false: down
	    */
	    function moveContactNet(){
	      var args = arguments;
	      var position = scope.rule.destinations.indexOf(arguments[0].id);

	      scope.rule.destinations.splice(position, 1);

	      if(arguments[1]){
					scope.rule.destinations.splice(position-1, 0, arguments[0].id);
	      }else{
	      	scope.rule.destinations.splice(position+1, 0, arguments[0].id);
	      }

	      orderContactNets();

	    }

    }
  }

}());
