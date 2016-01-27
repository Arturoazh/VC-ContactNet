(function() {
	'use strict';
  
  /* @ngInject */
  module.exports = function() {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          downloadedData: '=',
          card: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/categorizations/categorizations.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnCategories, $filter, $q, $mdToast) {

      var oldCategories = [];
    	$scope.categories = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnCategories.get().then(function(){
          $scope.categories = arguments[0];
          oldCategories = angular.copy($scope.categories);
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.categories.push({
          id: -1,
          label: "",
          modificable: true
        });
      }

      function save(){
        var promises = [];
        angular.forEach($scope.categories, function(){
          var args = arguments;
          if(args[0].action === 'DEL'){
            if(args[0].id !== -1){
              promises.push($cnCategories.remove(args[0]).then(function(){
                $scope.categories.splice(args[1], 1);  
              }, function(){
                delete $scope.categories[args[1]].action;  
              }));  
            }
          }else if(args[0].id === -1 || $filter('filter')(oldCategories, {id: args[0].id})[0].label !== args[0].label ){
            promises.push($cnCategories.save(args[0]).then(function(){
              $scope.categories[args[1]].id = arguments[0].id;  
            }));
          }
        });

        $q.all(promises).then(function(){
          $scope.card.openCard = false;
        });

      }

      function remove(){
        var args = arguments;
        $cnCategories.getContactnets(args[0]).then(function(){
          if(!arguments[0].length)
            args[0].action = 'DEL';
          else{
            $mdToast.show(
              $mdToast.simple()
                .textContent('Categoría en uso por '+arguments[0].length+' contactNet'+(arguments[0].length == 1 ? '' :'s') )
                .position('bottom left')
                .hideDelay(2500)
            );
          }
        });
        
      }

    }
  }


}());
