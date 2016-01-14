'use strict';

// @ngInject
module.exports = function reverseFilter($filter) {
  return function (data, b) {
    var isArray = data instanceof Array;
    if (isArray) return data.slice().reverse();

  };
};
