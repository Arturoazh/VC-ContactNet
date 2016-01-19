(function(){
	'use strict';

  angular
  	.module('virtual-center')
    .controller('reposController', controller);

  /* ngInject */
	function controller($rootScope, $scope, $cnContactNets, $cnChannels, $filter){

		$scope.repos = {
			'qualifications': {
				icon: 'school',
				title: 'Cualificaciones de casos',
				openCard: false,
				downloadedData: false
			},
			'categorizations': {
				icon: 'local_offer',
				title: 'Categorización de casos',
				openCard: false,
				downloadedData: false
			},
			'pause_states': {
				icon: 'pause_state',
				title: 'Estados de pausa',
				openCard: false,
				downloadedData: false
			},
			'skills': {
				icon: 'skills',
				title: 'Skills de agentes',
				openCard: false,
				downloadedData: false
			}
		};

		$scope.save = save;
		$scope.open = open;

		$rootScope.fab.hide = true;
 	
  	function open(){
  		$scope.repos[arguments[0]].downloadedData = false;
  		$scope.repos[arguments[0]].openCard = !$scope.repos[arguments[0]].openCard;
  	}

    function save(){
      console.log(arguments[0]);
    }


  }

}());
