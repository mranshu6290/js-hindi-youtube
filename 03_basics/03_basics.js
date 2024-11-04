// User object definition
const user = {
    username: "anshu", // Initial username
    price: 999, // Price property
    welcomeMessage: function() {
        // Method to log a welcome message
        console.log(`${this.username}, welcome!`); // Accessing username with 'this'
        console.log(this); // Logging the context (user object)
    }
};

// Log the welcome message for the initial username
console.log(user.welcomeMessage()); // Calls the method, outputs welcome message

// Update the username and log the new welcome message
user.username = "ganju"; // Changing the username property
console.log(user.welcomeMessage()); // Outputs updated welcome message

// Log the global context
console.log(this); // In strict mode, `this` is an empty object ({}); in browser, it's the window object

// Function example
function hello() {
    const name = "anshu1"; // Local variable
    console.log(`${this.name}, welcome!`); // Logs undefined because there's no object calling this function
}

hello(); // Calling the function, output is undefined

// Arrow function example
const abc = function() {
    const name = "anshu1"; // Local variable
    console.log(`${this.name}, welcome!`); // Still refers to the global context, output is undefined
};

// Convert the function to an arrow function
const abc1 = () => {
    const name = "anshu1"; // Local variable
    console.log(`${this.name}, welcome!`); // Inherits `this` from the surrounding scope, may still output undefined
};

// Arrow functions have different behavior for `this` compared to regular functions.
// In arrow functions, `this` refers to the lexical context, meaning the `this` value
// is inherited from the enclosing scope.

// Implicit return in arrow functions
// If the function consists of a single expression, we can omit the curly braces and
// the return keyword:
const sum = (a, b) => a + b; // Implicit return of the sum of a and b

// If we need to return an object, we must wrap it in parentheses:
const getUser = () => ({ username: "himanshu" }); // Explicit return of an object
