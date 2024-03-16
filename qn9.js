function generateFibonacciSeries() {
  let fibonacciSerie = [1, 1, 2, 3, 5, 8];
  let i = 5;

  while (fibonacciSerie[i - 1] + fibonacciSerie[i - 2] <= 100) {
    fibonacciSerie[i] = fibonacciSerie[i -1] + fibonacciSerie[i -2];
    i++
  }
  console.log(`Fibonacci numbers up to limit 100`)
  fibonacciSerie.forEach(n => console.log(n));
}

generateFibonacciSeries();