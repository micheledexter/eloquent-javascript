function isEven(num) {
  if (Math.abs(num) % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
