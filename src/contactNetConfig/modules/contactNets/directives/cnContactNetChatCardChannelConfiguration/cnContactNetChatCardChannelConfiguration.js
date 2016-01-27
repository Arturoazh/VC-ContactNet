(function() {
	'use strict';
  /* @ngInject */
  module.exports = function ($cnContactNets) {
  	
  	var directive = {
        restrict: 'EA',
        scope : {
        	contactnet : '=',
        	ngModel: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/contactNets/directives/cnContactNetChatCardChannelConfiguration/cnContactNetChatCardChannelConfiguration.html',
      	controller: controller
    };

    return directive;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnChannels, $filter) {
    	console.warn($scope.contactnet);
    	$scope.channels = [];
    	$scope.survey = $scope.contactnet.chatChannelParams.survey ? true : false;
    	$scope.autoReplies = $scope.contactnet.chatChannelParams.autoReplies.length ? true : false;

    	$cnChannels.get().then(function(){
    		$scope.channels = $filter('filter')(arguments[0], {channelId: 2});
    	});

    }
  }

 
}());