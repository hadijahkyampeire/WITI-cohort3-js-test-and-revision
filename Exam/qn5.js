/**
 * Write a JavaScript function that returns a string with letters in alphabetical order. 
 * Example string: 'webmaster', Expected Output: 'abeemrstw'. (2mks)
 */

function sortStringAlphabetically(str) {
  return str.split('').sort().join('');
}

console.log(sortStringAlphabetically('webmaster'));
