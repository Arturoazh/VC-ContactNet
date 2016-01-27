(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnRules) {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          routingRule: '=cnRoutingRules',
					channelId: '=cnChannelId',
					vocabulary: '=cnVocabulary'
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/rules/directives/routingRules/routingRules.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {


    }

    /* @ngInject */
    function controller ($scope) {

    	$scope.addCategorization = addCategorization;

			function addCategorization(){
				arguments[0].rules.push({
					"evaluationMode": "1",
					"type": "21",
					"data": [{
						"Category_Id": "2",
						"Description": "Alta Orange"
					}],
					"multiRule": true
				});
			}

    }
  }


}());
