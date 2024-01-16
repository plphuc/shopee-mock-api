export function getSuggestedProducts(products) {
  let suggestedRandom = new Set();
  const suggestedProducts = [];

  for (let i = 0; i < 30; i++) {
    suggestedRandom.add(Math.floor(Math.random() * 100));
  }
  suggestedRandom = Array.from(suggestedRandom);

  for (let i = 0; i < products.length; i++) {
    if (suggestedRandom.includes(i)) {
      suggestedProducts.push(products[i]);
    }
  }
  return JSON.stringify(suggestedProducts);
}

export function getBestSellerProducts(products) {
  console.log(products);
  let soldCount = products.map((product) => {
    return product.sold
  })
  soldCount = Array.from(new Set(soldCount))
  soldCount.sort(function(a, b) {return b - a})
  soldCount = soldCount.slice(0, 30)
  
  const bestSellerProducts = []

  soldCount.forEach((value, index) => {
    for (let idx = 0; idx< products.length; idx++) {
      if (value === products[idx].sold) {
        bestSellerProducts.push(products[idx])
        soldCount.splice(index, 1)
        return
      }
    }
  })
  return JSON.stringify(bestSellerProducts)
}