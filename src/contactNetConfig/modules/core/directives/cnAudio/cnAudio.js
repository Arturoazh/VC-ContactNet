(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnContactNets) {
  	
  	var directive = {
        restrict: 'EA',
        scope : {
        	src : '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/core/directives/cnAudio/cnAudio.html',
    };

    return directive;

    function link(scope, element, attr, ctrl) {

    	console.log('SCOPE AUDIO', scope);
    	var media = element[0].querySelector('audio');
    	// scope.isPlaying = false;

    	scope.$watch('src', function () {
    		// console.log('entra en watch', arguments[0]);
    		media.src = '/home/stream/streamspeech?id='+arguments[0];
    		// console.log(element.querySelector('audio').src = scope.url);
    	});

    	media.addEventListener('canplay',function(){
    		console.log('canplay');
        scope.$apply(function(){
	      	scope.isError = false;
        })
      });

      media.addEventListener('waiting',function(){
      	console.log('waiting');
        scope.$apply(function(){
          scope.mediaConfig = {
          	isLoaded : false,
          }
        });
      });

      media.addEventListener('ended',function(){
      	console.log('ERROR al intentar reproducir el audio', arguments[0]);
      	scope.$apply(function(){
	      	scope.isPlaying = false;
	      });
      })

      media.addEventListener('error',function(){
      	console.log('ERROR al intentar reproducir el audio', arguments[0]);
      	scope.$apply(function(){
	      	scope.isPlaying = false;
	      	scope.isError = true;
	      });
      })

      scope.actionPlaying = function(){
        scope.isPlaying ? scope.stop() : scope.play();
      }

      scope.play = function () {
      	media.play();
      	scope.isPlaying = true;
      }

      scope.stop = function () {
      	media.currentTime = 0;
      	media.pause();
      	scope.isPlaying = false;
      }

      scope.pause = function () {
      	media.pause();
      }


    	// scope.$apply(function () {
    	// 	scope.url;
    	// });

    }
  }

 
}());