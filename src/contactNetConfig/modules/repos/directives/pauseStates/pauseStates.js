(function() {
	'use strict';

  /* @ngInject */
  module.exports = function () {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          downloadedData: '=',
          card: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/pause_states/pause_states.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnPauseStatus, $filter, $q, $mdToast) {

      var oldPause_states = [];
    	$scope.pause_states = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnPauseStatus.get().then(function(){
          $scope.pause_states = arguments[0];
          oldPause_states = angular.copy($scope.pause_states);
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.pause_states.push({
          id: -1,
          label: "",
          modificable: true
        });
      }

      function save(){
        var promises = [];
        angular.forEach($scope.pause_states, function(){
          var args = arguments;
          if(args[0].action === 'DEL'){
            if(args[0].id !== -1){
              promises.push($cnPauseStatus.remove(args[0]).then(function(){
                $scope.pause_states.splice(args[1], 1);  
              }, function(){
                delete $scope.pause_states[args[1]].action;  
              }));  
            }
          }else if(args[0].id === -1 || $filter('filter')(oldPause_states, {id: args[0].id})[0].label !== args[0].label ){
            promises.push($cnPauseStatus.save(args[0]).then(function(){
              $scope.pause_states[args[1]].id = arguments[0].id;  
            }));
          }
        });

        $q.all(promises).then(function(){
          $scope.card.openCard = false;
        });

      }

      function remove(){
        var args = arguments;
        $cnPauseStatus.getContactnets(args[0]).then(function(){
          if(!arguments[0].length)
            args[0].action = 'DEL';
          else{
            $mdToast.show(
              $mdToast.simple()
                .textContent('Estado en uso por '+arguments[0].length+' contactNet'+(arguments[0].length == 1 ? '' :'s') )
                .position('bottom left')
                .hideDelay(2500)
            );
          }
        });
        
      }

    }
  }


}());
