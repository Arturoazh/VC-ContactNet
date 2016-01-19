(function() {
	'use strict';

	angular
    .module('virtual-center')
    .directive('cnRepoSkills', directive);

  /* @ngInject */
  function directive($timeout) {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          downloadedData: '=',
          card: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/skills/skills.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnSkills, $filter) {

      var oldSkills = [];
    	$scope.skills = [];

    	$scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnSkills.get().then(function(){
          $scope.skills = arguments[0];
          oldSkills = angular.copy($scope.skills);
          $scope.downloadedData = true;
        });
      }

    	function addNew(){
    		$scope.skills.push({
					id: -1,
					label: "",
          modificable: true
				});
    	}

      function save(){
        angular.forEach($scope.skills, function(){
          var args = arguments;
          if(args[0].id === -1 || $filter('filter')(oldSkills, {id: args[0].id})[0].label !== args[0].label ){
            $cnSkills.save(args[0]).then(function(){
              $scope.skills[args[1]].id = arguments[0].id;  
            });
          }
        });
      }

      function remove(){
        var args = arguments;
        $cnSkills.remove($scope.skills[arguments[0]]).then(function(){
          $scope.skills.splice(args[0], 1);  
        });
      }

    }
  }


}());
