function shapeArea(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return (n - 1) * 4 + 1;
  }
  return (n - 1) * 4 + shapeArea(n - 1);
}
