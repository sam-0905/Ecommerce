function getSortedData(productList, sortBy) {
    // console.log("sortBy inside sorting function", sortBy);
    switch (sortBy) {
      case 'PRICE_HIGH_TO_LOW':
        return productList.sort((a, b) => b.price - a.price);
      case 'PRICE_LOW_TO_HIGH':
        return productList.sort((a, b) => a.price - b.price);
      case 'All':
        return productList;
      default:
        return productList;
    }
  }
  
  export default getSortedData;