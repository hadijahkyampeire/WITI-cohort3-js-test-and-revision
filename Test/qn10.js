function sumAndTripleNumbers(num1, num2) {
  let result;
  const sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}

console.log(sumAndTripleNumbers(10, 10), 'similar numbers');
console.log(sumAndTripleNumbers(10, 15), 'different numbers');