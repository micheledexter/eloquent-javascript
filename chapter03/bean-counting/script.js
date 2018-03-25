function countBs(word) {
  let x = 0;
  for (let i of word) {
    if (i === 'B') {
      x++;
    }
  }
  return x;
}
function countChar(word, letter) {
  let x = 0;
  for (let i of word) {
    if (i === letter) {
      x++;
    }
  }
  return x;
}
console.log(countBs("BBC"));
console.log(countChar('kakkerlak','k'));
