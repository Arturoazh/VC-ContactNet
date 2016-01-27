(function() {
    'use strict';

    /* @ngInject */
    module.exports = function ($timeout, $document) {
        
        var directive = {
            restrict: 'EA',
            scope: {},
            link: link
        };

        return directive;


        function link(scope, element, attr, ctrl) {

            var el = document.querySelector('[role="main"]');
            el.addEventListener("scroll", scroll);
            
            function scroll () {
                // console.log('FUNCIONA');
                // console.log(el.scrollTop);
                if (el.scrollTop && el.scrollTop > 240) {
                    if (!element[0].classList.contains('filterSearchExpanded'))
                        element[0].classList.add('filterSearchExpanded');
                }else {
                    if (element[0].classList.contains('filterSearchExpanded'))
                        element[0].classList.remove('filterSearchExpanded');
                };
            }

            scope.$on('$destroy', function () {
                el.removeEventListener('scroll', scroll);
            })
        }
    }
 
}());