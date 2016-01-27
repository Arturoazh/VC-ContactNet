(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnLanguages, $filter) {

  	var directive = {
        restrict: 'EA',
        scope: {
        	rule: '=cnRule'
        },
        templateUrl: '/contactNetConfig/modules/rules/directives/selectLanguages/selectLanguages.html',
        link: link
    };

    return directive;


    function link(scope, element, attr, ctrl) {

    	scope.languages = [];
    	scope.toggleLanguage = toggleLanguage;

    	var routingRulesIndex = false;


    	function toggleLanguage(){
    		var language = angular.copy(arguments[0]);
    		if(language.selected){
	    		delete language.selected;
	    		scope.rule.rules[routingRulesIndex].data.push(language);
    		}else{
    			angular.forEach(scope.rule.rules[routingRulesIndex].data, function(){
    				if(arguments[0].Language_Id == language.Language_Id)
    					scope.rule.rules[routingRulesIndex].data.splice(arguments[1], 1);
    			});
    		}

    	}


    	function init(){

    		$cnLanguages.get().then(function(){
					scope.languages = arguments[0];

					angular.forEach(scope.languages, function(){
						var language = angular.copy(  $filter('filter')(scope.rule.rules[routingRulesIndex].data, {"Language_Id": arguments[0].Language_Id}) );
						if(language.length){
							scope.languages[arguments[1]].selected = true;
						}else{
							scope.languages[arguments[1]].selected = false;
						}
					});
	    	});

    		angular.forEach(scope.rule.rules, function(){
    			if(arguments[0].type == 20)
    				routingRulesIndex = arguments[1];
    		});

    		if(routingRulesIndex === false){
    			routingRulesIndex = scope.rule.rules.length;
    			scope.rule.rules.push({
    				"evaluationMode": "1",
						"type": "20",
						"data": [],
						"multiRule": true
    			});
    		}

    	}

    	init();

    }
  }

}());
