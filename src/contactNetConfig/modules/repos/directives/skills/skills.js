(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($timeout) {

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
    function controller ($scope, $cnSkills, $filter, $q, $mdToast) {

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
        var promises = [];
        angular.forEach($scope.skills, function(){
          var args = arguments;
          if(args[0].action === 'DEL'){
            if(args[0].id !== -1){
              promises.push($cnSkills.remove(args[0]).then(function(){
                $scope.skills.splice(args[1], 1);  
              }, function(){
                delete $scope.skills[args[1]].action;  
              }));  
            }
          }else if(args[0].id === -1 || $filter('filter')(oldSkills, {id: args[0].id})[0].label !== args[0].label ){
            promises.push($cnSkills.save(args[0]).then(function(){
              $scope.skills[args[1]].id = arguments[0].id;  
            }));
          }
        });

        $q.all(promises).then(function(){
          $scope.card.openCard = false;
        });

      }

      function remove(){
        var args = arguments;
        $cnSkills.getContactnets(args[0]).then(function(){
          if(!arguments[0].length)
            args[0].action = 'DEL';
          else{
            $mdToast.show(
              $mdToast.simple()
                .textContent('Skill en uso por '+arguments[0].length+' contactNet'+(arguments[0].length == 1 ? '' :'s') )
                .position('bottom left')
                .hideDelay(2500)
            );
          }
        });
        
      }


    }
  }


}());
