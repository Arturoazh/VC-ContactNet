'use strict';

// @ngInject
module.exports = function orderObjectByFilter() {
  return function (items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function (item, key) {
      if (item instanceof Function === false) {
        item._key = key;
        filtered.push(item);
      }
    });
    function index(obj, i) {
      return obj[i];
    }

    filtered.sort(function (a, b) {
      var comparator;
      var reducedA = field.split('.').reduce(index, a);
      var reducedB = field.split('.').reduce(index, b);
      if (reducedA === reducedB) {
        comparator = 0;
      } else {
        comparator = (reducedA > reducedB ? 1 : -1);
      }
      return comparator;
    });
    if (reverse) {
      filtered.reverse();
    }
    return filtered;
  };
};
