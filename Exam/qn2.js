/**
 * 
 * Write a program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 
 * Ensure to have two logs one with two similar numbers and the other with different numbers. (3mks)

 * @param {*first number} num1 
 * @param {*second number} num2 
 * @returns sum or triple sum if they are equal
 */
function sumAndTripleNumbers(num1, num2) {
  const sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}

console.log(sumAndTripleNumbers(10, 10), 'similar numbers');
console.log(sumAndTripleNumbers(10, 15), 'different numbers');
