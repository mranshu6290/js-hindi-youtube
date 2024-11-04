// To immediately execute a function, we can use an Immediately Invoked Function Expression (IIFE).

// This approach helps avoid pollution from the global scope by creating a private scope.

// To create an IIFE, we define a regular function and wrap it in parentheses, 
// then immediately invoke it by adding another pair of parentheses at the end, followed by a semicolon.

// Example of a regular function:
function fxnA() {
    console.log("Hello"); // This would log "Hello" when called
}

// To convert it into an IIFE, wrap it in parentheses and call it:
(function fxnA() {
    console.log("Hello"); // This will log "Hello" immediately when executed
})(); // The extra () at the end invoke the function

// Now, let's create the same IIFE using an arrow function:
(() => {
    console.log("Hello"); // This will also log "Hello" immediately
})(); // Again, the () at the end invoke the function

// If we want to pass an argument to this function, we can do so in the second set of parentheses:
((name) => {
    console.log(`Hello ${name}`); // Logs "Hello" followed by the name provided
})("anshu"); // This immediately calls the function with "anshu" as the argument
