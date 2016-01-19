(function() {
	'use strict';

	angular
    .module('virtual-center')
    .directive('cnRepoPauseStates', directive);

  /* @ngInject */
  function directive() {

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
    function controller ($scope, $cnPauseStatus, $filter) {

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
        angular.forEach($scope.pause_states, function(){
          var args = arguments;
          if(args[0].id === -1 || $filter('filter')(oldPause_states, {id: args[0].id})[0].label !== args[0].label ){
            $cnPauseStatus.save(args[0]).then(function(){
              $scope.pause_states[args[1]].id = arguments[0].id;  
            });
          }
        });
      }

      function remove(){
        var args = arguments;
        $cnPauseStatus.remove($scope.pause_states[arguments[0]]).then(function(){
          $scope.pause_states.splice(args[0], 1);  
        });
      }

    }
  }


}());
