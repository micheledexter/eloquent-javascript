for (let i = 1; i <= 100; i++) {
  let div3 = i % 3;
  let div5 = i % 5;
  let log = i + ' ';
  if (!div3) log = log + 'Fizz';
  if (!div5) log = log + 'Buzz';
  console.log(log);
}
