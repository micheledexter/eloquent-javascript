function min(n1, n2) {
  if (n1 < n2) {
    return n1;
  } else if (n2 < n1) {
    return n2;
  } else {
    return n1;
  }
}
console.log(min(0,10));
console.log(min(0,-10));
