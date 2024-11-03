// Understanding Functions in JavaScript

// Anything defined within a function will not execute until the function is called.
// Simply writing the function name (e.g., fun) outputs a reference to the function.
// To execute the function and see its output, you must call it with parentheses (e.g., fun()).

// Functions can accept arguments. If a function expects arguments but none are provided, the values will be undefined.
// Functions can include checks to prevent unwanted loops or errors using conditions like:
if (!username) {
    // This block executes if username is not defined (falsy).
  }
  
  // Example: If username is defined, it evaluates to true, and !username evaluates to false.
  
  // When you want a function to accept an arbitrary number of arguments, use the rest operator (...).
  // This allows you to gather all additional arguments into an array.
  
  function exampleFunction(val1, val2, ...num1) {
    console.log(val1, val2, num1); // val1 and val2 are separate, num1 is an array of additional arguments.
  }
  
  // How to Pass an Object to a Function
  
  const user = {
    username: "anshu",
    age: 18
  };
  
  // When calling the function with an object, you can create the object beforehand or pass it directly.
  function greet(userObject) {
    console.log(`Hi ${userObject.username}`);
  }
  
  // Calling the function with an existing object
  greet(user); // Output: Hi anshu
  
  // Passing an object directly when calling the function
  greet({
    username: "ganju"
  }); // Output: Hi ganju
  