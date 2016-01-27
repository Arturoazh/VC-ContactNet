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
        templateUrl: '/contactNetConfig/modules/repos/directives/qualifications/qualifications.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnQualifications, $filter, $q, $mdToast) {

      var oldQualifications = [];
    	$scope.qualifications = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnQualifications.get().then(function(){
          $scope.qualifications = arguments[0];
          oldQualifications = angular.copy($scope.qualifications);
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.qualifications.push({
          id: -1,
          label: "",
          value: 'POSITIVE',
          modificable: true
        });
      }

      function save(){
        var promises = [];
        angular.forEach($scope.qualifications, function(){
          var args = arguments;
          if(args[0].action === 'DEL'){
            if(args[0].id !== -1){
              promises.push($cnQualifications.remove(args[0]).then(function(){
                $scope.qualifications.splice(args[1], 1);  
              }, function(){
                delete $scope.qualifications[args[1]].action;  
              }));  
            }
          }else if(args[0].id === -1 || $filter('filter')(oldQualifications, {id: args[0].id})[0].label !== args[0].label ){
            promises.push($cnQualifications.save(args[0]).then(function(){
              $scope.qualifications[args[1]].id = arguments[0].id;  
            }));
          }
        });

        $q.all(promises).then(function(){
          $scope.card.openCard = false;
        });

      }

      function remove(){
        var args = arguments;
        $cnQualifications.getContactnets(args[0]).then(function(){
          if(!arguments[0].length)
            args[0].action = 'DEL';
          else{
            $mdToast.show(
              $mdToast.simple()
                .textContent('Cualificación en uso por '+arguments[0].length+' contactNet'+(arguments[0].length == 1 ? '' :'s') )
                .position('bottom left')
                .hideDelay(2500)
            );
          }
        });
        
      }


    }
  }


}());
