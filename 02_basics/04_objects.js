// Singleton Objects

// Creating a singleton object using the Object constructor.
// This means only one instance of this object exists.
const singletonObj = new Object();

// Creating an object using object literal notation.
// This allows for multiple instances.
const literalObj = {}; // This will output: {}

// Objects can contain other objects.
const nestedObj = {
  name: {
    userfullname: {
      firstname: "himanshu",
      lastname: "sharma",
      anotherObject: {
        nested: {
          nested: {
            nested: {}
          }
        }
      }
    }
  }
};

// Accessing nested objects can be done using dot notation or bracket notation.
// The preferred way is to use dot notation:
console.log(nestedObj.name.userfullname.firstname); // "himanshu"

// Merging Objects

const objA = { 1: 1, 2: 2, 3: 3 };
const objB = { 4: 4, 5: 5, 6: 6 };

// To combine objects, use Object.assign() to create a new object.
const mergedObj1 = Object.assign({}, objA, objB); // Merges objA and objB into mergedObj1

// Alternatively, you can use the spread operator to merge objects:
const mergedObj2 = { ...objA, ...objB };

// Working with Arrays of Objects

// When a database returns an array of objects, you can extract keys, values, or entries.
const exampleObj = { a: 1, b: 2, c: 3 };

// Get an array of keys
const keys = Object.keys(exampleObj); // Returns ["a", "b", "c"]

// Get an array of values
const values = Object.values(exampleObj); // Returns [1, 2, 3]

// Get an array of key-value pairs
const entries = Object.entries(exampleObj); // Returns [["a", 1], ["b", 2], ["c", 3]]

// Checking for Property Existence

// You can check if an object has a specific property using hasOwnProperty().
const hasValue = literalObj.hasOwnProperty("key"); // Returns true or false based on existence

// Destructuring Arrays and Objects

// Destructuring allows you to extract values from objects or arrays and assign them to variables.
const course = {
  coursename: "JavaScript in Hindi",
  price: 999,
  instructor: "Anshu"
};

// To get the course name directly:
const { coursename } = course; // Extracts coursename

console.log(coursename); // "JavaScript in Hindi"

// You can also rename the destructured variable:
const { coursename: easyName } = course; // Renames to easyName

console.log(easyName); // "JavaScript in Hindi"

// Understanding JSON

// JSON (JavaScript Object Notation) looks similar to objects but has key-value pairs enclosed in quotes.
const jsonString = '{"coursename": "JavaScript in Hindi", "price": 999, "instructor": "Anshu"}';
// JSON keys must be in string format, and JSON is typically used for data interchange.
