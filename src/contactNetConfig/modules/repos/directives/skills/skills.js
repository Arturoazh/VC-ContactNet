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
          downloadedData: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/skills/skills.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnSkills) {

    	$scope.skills = [];

    	$scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnSkills.get().then(function(){
          $scope.skills = arguments[0];
          $scope.downloadedData = true;
        });
      }

    	function addNew(){
    		$scope.skills.unshift({
					id: -1,
					label: ""
				});
    	}

      function save(){
        var args = arguments;
        $cnSkills.save($scope.skills[arguments[0]]).then(function(){
          $scope.skills[args[0]].id = arguments[0].id;  
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
