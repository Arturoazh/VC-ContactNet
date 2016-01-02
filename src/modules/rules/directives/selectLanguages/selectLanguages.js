(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnSelectLanguages', directive);

    /* @ngInject */
    function directive($cnLanguages, $filter) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope: {
	        	rule: '=cnRule'
	        },
	        templateUrl: 'modules/rules/directives/selectLanguages/selectLanguages.html',
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
		    		scope.rule.routingRules[0].rules[routingRulesIndex].data.push(language);
	    		}else{
	    			angular.forEach(scope.rule.routingRules[0].rules[routingRulesIndex].data, function(){
	    				if(arguments[0].Language_Id == language.Language_Id)
	    					scope.rule.routingRules[0].rules[routingRulesIndex].data.splice(arguments[1], 1);
	    			});
	    		}
		    		
	    	}


	    	function init(){

	    		$cnLanguages.get().then(function(){
						scope.languages = arguments[0];	   

						angular.forEach(scope.languages, function(){
							var language = $filter('filter')(scope.rule.routingRules[0].rules[routingRulesIndex].data, {"Language_Id": arguments[0].Language_Id});
							if(language.length){
								scope.languages[arguments[1]].selected = true;
								console.log(scope.languages);
							}
						}); 		
		    	});

	    		angular.forEach(scope.rule.routingRules[0].rules, function(){
	    			if(arguments[0].type == 20)
	    				routingRulesIndex = arguments[1];
	    		});

	    		if(routingRulesIndex === false){
	    			routingRulesIndex = scope.rule.routingRules[0].rules.length;
	    			scope.rule.routingRules[0].rules.push({
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