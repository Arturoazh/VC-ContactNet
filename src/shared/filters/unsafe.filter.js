'use strict';

// @ngInject
module.exports = function unsafeFilter($sce) {
  return function (text) {
    return $sce.trustAsHtml(text);
  };
};