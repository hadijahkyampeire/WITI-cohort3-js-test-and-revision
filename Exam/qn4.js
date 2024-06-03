/**
 * Write a JavaScript function that reverses a number. Eg 32243=34223 (2mks)
 */

function reverseNumber(num) {
  const str = num.toString();

  return parseInt(str.split('').reverse().join(''));
}

console.log(reverseNumber(32243));
