/**
 * Write a javascript function to square numbers from 1 to 6. Display the results as an unordered list with such a statement for all 6 numbers. 
 * ‘ The square of 1 is 1’. (2mks)
 */

function squareNumbers() {
  for (let i = 1; i <= 6; i++) {
    console.log(`The square of ${i} is ${i*i}`);
  }
}

squareNumbers();
