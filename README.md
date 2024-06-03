# WITI-cohort3-js-test
CDS120 Intermediate Web Design and Development 15/03/2024

Name: ………………………………………………………………………………

RegNo: ……………………………………………………………………………..

## Section A: (10mks)

1. What is JavaScript?
    ```
    a) JavaScript is a scripting language used to make the website interactive
    b) JavaScript is an assembly language used to make the website interactive
    c) JavaScript is a compiled language used to make the website interactive
    d) None of the mentioned
    ```

      #### Answer: a
      ```
      Explanation: JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side.
      ```
2. What will be the output of the following JavaScript code?
    ```js
      <p id="demo"></p>
      <script>
         var js = 10;
         js *= 5;
        document.getElementById("demo").innerHTML = js;
      </script>
      a) 10
      b) 50
      c) 5
      d) Error
    ```

      #### Answer: b
      ```
      Explanation: The *= operator in javascript is a shorthand expression for the multiplication of a particular number. It is a combination of two operators * and = .
      ```
3. What will be the output of the following JavaScript code?
    ```js
    function compare() {
        let a=2;
        let b=2.0;
        if(a==b) return true;
        else return false;
    }
    a) false
    b) true
    c) compilation error
    d) runtime error
    ```

      #### Answer: b
      ```
      Explanation: The == in JS convert different types of operands to the same type before making the comparison whereas a strict comparison === results in true value if the operands are of the same type and the contents match.
      ```
4. What will be the output of the following JavaScript code?
    ```js
      function height() {	
          var  height = 123.56;
          var type = (height>=190) ? "tall": "short";
          return type;
      }
      a) short
      b) 123.56
      c) tall
      d) 190
    ```
      #### Answer: a
      ```
      Explanation: The ternary operator in javascript is used as a comparison operator which works on three operands. The statement in the above code initializes type variable with the value short which is returned through the function.
      ```
5. What will be the output of the following JavaScript code?
    ```js
    var a=5 , b=1
    var obj = { a : 10 }
    with(obj) { 
       alert(b) 
      }
    a) 1
    b) 10
    c) 5
    d) Error
    ```
      #### Answer: a
      ```
      Explanation: Firstly the interpreter checks obj for property b. But it doesn’t find any property b so it takes the value from outside the object within the JavaScript code snippet.
      ```

## Section B: (20mks)
6. Create an HTML form with Email, Name, and Password elements. Add validation on form submission if some values are not added. I.e the validation should throw an alert that says ‘Please fill all the values’. (3mks)

7. Write a JavaScript function that takes a string with lower and upper case letters as a parameter and converts upper case letters to lower case and lower case letters to upper case. E.g. hElLo should be HeLlO. (3mk)

8.  Create an object to store the following information about your favorite movie: `title (a string)`, `duration (a number)`, and `star (an object of name, country, and age strings)`. (4mk)
Create a function to log the movie information like this: `"Puff the Magic Dragon lasts for 30 minutes. Star: Puff is 45 years old and born in Uganda."`

9. Write a program to print Fibonacci Numbers to 100. Hint Fibonacci Numbers refer to a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. (5mks)

10. Write a program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. Ensure to have two logs one with two similar numbers and the other with different numbers. (3mks)

11. Write a JavaScript function to split a string and convert it into an array of words. (2mk)



## End of Semester Exam

#### WOMEN INSTITUTE OF TECHNOLOGY AND INNOVATION, UGANDA

#### CDS120 INTERMEDIATE WEB DESIGN AND DEVELOPMENT END OF SEMESTER EXAM 26th April 2024, 
#### Duration: 3 Hours
## SECTION A (20mks)
1. Create an object to store the following information about your favorite movie: title (a string), duration (a number), and star (an object of name, country, and age strings). Create a function to log the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Star: Puff is 45 years old and born in Uganda." (3mks)
2. Write a program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. Ensure to have two logs one with two similar numbers and the other with different numbers. (3mks)
3. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion. Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. (3mks) 
4. Write a JavaScript function that reverses a number. Eg 32243=34223 (2mks)
5. Write a JavaScript function that returns a string with letters in alphabetical order. Example string: 'webmaster', Expected Output: 'abeemrstw'. (2mks)
6. Write a javascript function to square numbers from 1 to 6. Display the results as an unordered list with such a statement for all 6 numbers. ‘ The square of 1 is 1’. (2mks)
7. Write a JS expression to add the following property and value to the person object: country: Uganda. const person = {name: “Jane”, age: 24 }. (1mk)
8. Write a JavaScript program to change the text color to blue on mouseover. (1mk)
9. Create two HTML elements and add onClick events to each to alert their values. (1mk)
10. Write a javascript function that takes in a temperature value in Fahrenheit and returns its equivalent in Celsius. Hint To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9). (2mks)

## SECTION B (40mks)
11. Write a program to print Fibonacci Numbers to 100. Hint Fibonacci Numbers refer to a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. (4mks)
12. Write a JavaScript function that checks whether a passed string is a palindrome or not. A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. (4mks)
13. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively. Sample array [1,2,3,4,5]. Expected Output: [2,4] (4mks)
14. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.  Example string: 'Web Development Tutorial', Expected Output: 'Development'. (4mks)
15. Create a CRUD Grocery list project, it should add, edit, view, and delete groceries. (10mks)
16. Create a bucket list project, it should add, edit, view, delete, and mark items as done. NB: The done items should be in a separate list on the page. (14mks)




