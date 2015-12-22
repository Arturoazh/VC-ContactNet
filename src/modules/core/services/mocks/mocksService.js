(function(){
	"use strict";

  angular
  	.module('virtual-center')
    .service('$cnMocks', service);

  /* ngInject */
  function service(){

	var scope = this;

	scope.contactNets = {
		0 : {
			name: 'cosa',
		}
	}

	scope.menu = {
		0 : {
			name: 'contactNet',
			views : {
				0: {
					name: 'Canales',
					uri: '/channels'
				},
				1: {
					name: 'Listado',
					uri: '/list'
				},
				2: {
					name: 'Enrutamiento',
					uri: '/routing'
				}
			}
		},
		1 : {
			name: 'contactos',
			uri: '/contacts'
		}
	}


	return scope;

  }

})();
