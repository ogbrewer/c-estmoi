/*
    A JavaScript function is a block of code designed to perform a particular task.
    A JavaScript function is executed when "something" invokes it (calls it).

    Why Functions?
    You can reuse code: Define the code once, and use it many times.
    You can use the same code many times with different arguments, to produce different results.
*/

/*
    JavaScript Function Syntax
    A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

    Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

    The parentheses may include parameter names separated by commas:
    (parameter1, parameter2, ...)

    The code to be executed, by the function, is placed inside curly brackets: {}
*/

// Example of a JavaScript function here called name
function name(parameter1, parameter2, parameter3) {
    // code to be executed
    console.log(parameter1 + " " + parameter2 + " " + parameter3);
}

/*
    Function Invocation
    The code inside the function will execute when "something" invokes (calls) the function:

    - When an event occurs (when a user clicks a button)
    - When it is invoked (called) from JavaScript code
    - Automatically (self invoked)
*/

// Calling the function from above would look like this
// this will console.log "James Hunter Bond"
name("James", "Hunter", "Bond");

// we can call this function again but with different values to console.log another name
// this will console.log "Melissa Joan Hart"
name("Melissa", "Joan", "Hart");

/*
    Function Return
    When JavaScript reaches a return statement, the function will stop executing.

    If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

    Functions often compute a return value. The return value is "returned" back to the "caller":
*/

function adder(numOne, numTwo) {
    return numOne + numTwo; // Function returns the sum of numOne and numTwo
}

var sum = adder(4, 3);   // Function is called, return value will end up in the variable sum

// If we wanted to see the value returned 
// from the adder function 
// we would need to console.log(sum)
console.log("The sum is: " + sum);

// We can do more complex functions 
// and this is where return really comes in handy

// this function converts Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

var temperture = toCelsius(100);
console.log("Today's temperture is in Celsius is " + temperture);

// Now that you've read about functions test your knowledge in the Unsolved Folder.