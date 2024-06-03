/**
 * Write a program to print Fibonacci Numbers to 100. Hint Fibonacci Numbers refer to a series of numbers in which each number 
 * ( Fibonacci number ) is the sum of the two preceding numbers.
 * The simplest is the series 1, 1, 2, 3, 5, 8, etc. (4mks)
 */

function fibonacciSeries() {
  let fibSeries = [1, 1, 2, 3, 5, 8];
  let i = 5;
  while(fibSeries[i - 1] + fibSeries[i - 2] <= 100) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    i++;
  }
  console.log(`Fibonacci numbers up to limit 100`)
  fibSeries.forEach(n => console.log(n));
}

fibonacciSeries();
