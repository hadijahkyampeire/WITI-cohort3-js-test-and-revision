/**
 * Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively. 
 * Sample array [1,2,3,4,5]. Expected Output: [2,4] (4mks)
 */

function secondMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;

  let secondMin = Infinity;
  let secondMax = -Infinity;

  for(let num of arr) {
    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin && num !== min) {
        secondMin = num;
    }

    if(num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
        secondMax = num;
    }
  }

  return `${[secondMin, secondMax]} Details: Second Min: ${secondMin} and Second Max: ${secondMax} in this array: ${arr.join(',')}`;
}

console.log(secondMinMax([1,2,3,4,5]));