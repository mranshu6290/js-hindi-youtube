// Understanding let, const, and var

// Scope is defined by the use of curly braces {} in functions and loops.
// It determines where variables are accessible within your code.

// var is considered dangerous because it has function scope or global scope,
// which can lead to unexpected behavior. Always prefer using let and const.

// Scope in the global context (window) differs from scope within functions or blocks in the browser.

// Nested Scope and Closures

// Nested functions can access variables from their parent scopes, creating closures.
// A closure allows an inner function to remember the environment in which it was created.

// Hoisting

// Functions declared using function declarations are hoisted. 
// This means you can call them before their definition without causing an error.

console.log(abc()); // Output: "Hello"

function abc() {
    console.log("Hello");
}

// However, if you declare a function using a variable (function expression), 
// it will not be hoisted. You cannot call it before its declaration.

console.log(s); // ReferenceError: Cannot access 's' before initialization

const s = function abc() {
    console.log("Hello");
};

// The moment you encounter an error, execution stops, similar to a break situation.
