/**
 * Write a javascript function that takes in a temperature value in Fahrenheit and returns its equivalent in Celsius. 
 * Hint To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9). (2mks)
 */

function convertTemperatureToCelcius(fahrenheitTemp) {
  return fahrenheitTemp - 32 * 5/9;
}

console.log(convertTemperatureToCelcius(78))