'use strict';

// @ngInject
module.exports = function objectFilter() {
  return function (items, value, attr) {
    if (items instanceof Object && value !== '') {
      var itemsFiltered = {};
      for (var key in items) {
        if (
          (attr && items[key][attr].toLowerCase().lastIndexOf(value.toLowerCase()) >= 0) ||
          (!attr && items[key] && items[key].toLowerCase().lastIndexOf(value.toLowerCase()) >= 0)
        ) {
          itemsFiltered[key] = items[key];
        }
      }
      return itemsFiltered;
    }
    return items;
  };
};