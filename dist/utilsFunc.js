"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBestSellerProducts = getBestSellerProducts;
exports.getSuggestedProducts = getSuggestedProducts;
function getSuggestedProducts(products) {
  var suggestedRandom = new Set();
  var suggestedProducts = [];
  for (var i = 0; i < 30; i++) {
    suggestedRandom.add(Math.floor(Math.random() * 100));
  }
  suggestedRandom = Array.from(suggestedRandom);
  for (var _i = 0; _i < products.length; _i++) {
    if (suggestedRandom.includes(_i)) {
      suggestedProducts.push(products[_i]);
    }
  }
  return JSON.stringify(suggestedProducts);
}
function getBestSellerProducts(products) {
  var soldCount = products.map(function (product) {
    return product.sold;
  });
  soldCount = Array.from(new Set(soldCount));
  soldCount.sort(function (a, b) {
    return b - a;
  });
  soldCount = soldCount.slice(0, 30);
  var bestSellerProducts = [];
  soldCount.forEach(function (value, index) {
    for (var idx = 0; idx < products.length; idx++) {
      if (value === products[idx].sold) {
        bestSellerProducts.push(products[idx]);
        soldCount.splice(index, 1);
        return;
      }
    }
  });
  return JSON.stringify(bestSellerProducts);
}