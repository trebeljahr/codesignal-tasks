function adjacentElementsProduct(inputArray) {
  let largestProduct = -Infinity;
  for (let i = 1; i <= inputArray.length; i++) {
    const elem1 = inputArray[i];
    const elem2 = inputArray[i - 1];
    const product = elem1 * elem2;
    if (largestProduct < product) {
      largestProduct = product;
    }
  }
  return largestProduct;
}
