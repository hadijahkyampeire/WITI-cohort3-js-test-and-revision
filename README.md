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








