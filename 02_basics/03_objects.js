// Objects in JavaScript can be created using object literals or constructors.
// An object is often a singleton, meaning only one instance of a constructor is created.

// Creating an object using an object literal:
const user = {};

// Objects consist of key-value pairs, where keys are property names and values can be of any type.
const user1 = {
  name: "himanshu", // Quotes are optional for keys that are valid identifiers.
  age: 18,
  myArr: [1, 2, 3, 4] // Objects can also contain arrays.
};

// Accessing data from objects:
// - Use dot notation for standard keys.
console.log(user1.name); // "himanshu"
// - Use bracket notation for keys with spaces or special characters.
console.log(user1["age"]); // 18

// Symbols are unique identifiers that can be used as keys.
// To define a property with a symbol, declare it using brackets:
const mySymbol = Symbol("mySymbol");
user[mySymbol] = "123"; // Ensure it's a symbol
// If declared without brackets, it will be treated as a string.
// mySymbol = "123"; // This would make mySymbol a string

// Changing values in an object:
user1.name = "anshu"; // Update the name property
console.log(user1.name); // "anshu"

// Adding functions to objects:
// Declare a function and assign it to a property of the object.
const greet = function() {
  console.log("Hello World");
};

user.greetings = greet; // The user object now has a greetings method

// You can call the function like this:
user.greetings(); // Outputs: "Hello World"

// If you print user.greetings without parentheses, it will log the function reference, not invoke it.
console.log(user.greetings); // Logs the function definition

// To access values from the object within a function, use string interpolation.
const greetWithName = function() {
  console.log(`Hello ${this.name}`);
};

user1.greetings = greetWithName;

// Calling the method to see the output
user1.greetings(); // Outputs: "Hello himanshu"

// You can also define a function directly within an object.
user1.greetings3 = function() {
  console.log(`Hello ${this.name}`);
};

console.log("Output:"); 
user1.greetings3(); // Outputs: "Hello himanshu"
