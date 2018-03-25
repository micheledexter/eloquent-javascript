let white = ' ';
let black = '#';
for (let i = 0; i < 8; i++) {
  if (i % 2) {
    console.log((black + white).repeat(4));
  } else {
    console.log((white + black).repeat(4));
  }
}
