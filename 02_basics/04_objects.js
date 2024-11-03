// Singleton Objects

// Creating a singleton object using the Object constructor.
// This means only one instance of this object exists.
const obj = new Object();

// Creating an object using object literal notation.
// This allows for multiple instances.
const obj1 = {}; // This will output: {}

// Objects can contain other objects.
const obj2 = {
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
console.log(obj2.name.userfullname.firstname); // "himanshu"

// Merging Objects

const obj3 = { 1: 1, 2: 2, 3: 3 };
const obj4 = { 4: 4, 5: 5, 6: 6 };

// To combine objects, use Object.assign() to return a new object.
const obj5 = Object.assign({}, obj3, obj4); // Merges obj3 and obj4 into obj5

// Alternatively, you can use the spread operator to merge objects:
const mergedObj = { ...obj3, ...obj4 };

// Working with Arrays of Objects

// When a database returns an array of objects, you can extract keys, values, or entries.
const exampleObj = { a: 1, b: 2, c: 3 };

// Get an array of keys
const keys = Object.keys(exampleObj); // Returns ["a", "b", "c"]

// Get an array of values
const values = Object.values(exampleObj); // Returns [1, 2, 3]

// Get an array of key-value pairs as arrays
const entries = Object.entries(exampleObj); // Returns [["a", 1], ["b", 2], ["c", 3]]

// Checking for Property Existence

// You can check if an object has a specific property using hasOwnProperty().
const hasValue = obj1.hasOwnProperty("key"); // Returns true or false based on the existence of the property
