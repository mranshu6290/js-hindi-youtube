// For Loop Example
/**
 * The basic `for` loop is used to iterate over arrays or other iterable objects.
 * It allows manual control of the index, making it flexible for various use cases.
 * 
 * Syntax: 
 * for (let i = 0; i < arr.length; i++) {
 *     const element = arr[i];  // Access each element using the index
 *     console.log(element);     // Do something with the element
 * }
 */

// Example for loop usage:
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);  // Prints each element of the array
}

/**
 * For...of Loop
 * The `for...of` loop is an iterator for objects and iterables (like arrays and strings).
 * It automatically handles the iteration, making it simpler than a `for` loop.
 * 
 * Syntax: 
 * for (const item of iterable) {
 *     // Do something with the item
 * }
 * 
 * This loop automatically increments the iterator and stops when the iterable is exhausted.
 * It works with arrays, strings, maps, and other iterable objects.
 */

// Example of using `for...of` with an array:
for (const num of arr) {
    console.log(num);  // Prints each element of the array
}

// `for...of` can also be used on strings:
const str = "Hello";
for (const char of str) {
    console.log(char);  // Prints each character of the string
}


/**
 * Maps
 * A `Map` is an object that holds key-value pairs and remembers the insertion order of the keys.
 * - Maps do not allow duplicate keys.
 * - Maps are **not** iterable with a `for...in` loop, so we use `for...of` to loop through a Map.
 * 
 * Syntax:
 * const map = new Map();
 * map.set(key, value);  // Adding key-value pairs to the Map
 * 
 * Example of using `for...of` with a Map:
 * for (const [key, value] of map) {
 *     console.log(key, value);  // Print each key-value pair
 * }
 */

// Example of using `Map`:
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');

// Looping over a Map using `for...of`
for (const [key, value] of map) {
    console.log(key, value);  // Prints key-value pairs, e.g., 'IN India'
}

/**
 * Important Notes:
 * - We use `for...of` for iterating over `Map` objects.
 * - The `for...in` loop is **not** recommended for iterating over Maps or Arrays.
 */

/**
 * Objects and Iteration
 * - Objects cannot be iterated using `for...of`. Instead, we use the `for...in` loop to iterate over object keys.
 * 
 * Syntax:
 * for (const key in obj) {
 *     // Do something with the key
 * }
 */

// Example using `for...in` to iterate over an object:
const obj1 = { name: 'Himanshu', last: 'Sharma' };

for (const key in obj1) {
    console.log(key);  // Prints each key, e.g., 'name', 'last'
    console.log(obj1[key]);  // Prints the value associated with each key, e.g., 'Himanshu', 'Sharma'
}

/**
 * Note:
 * - `for...in` can be used to iterate over object properties, but it does not provide access to the values directly.
 * - We need to use the key to access the value using `obj1[key]`.
 */

/**
 * Using `for...in` with Arrays:
 * While `for...in` can be used to iterate over array indices, it’s generally not recommended for accessing elements.
 * Use `for...of` for that.
 * 
 * Example using `for...in` with an array:
 * const arr2 = [1, 2, 3, 4];
 * for (const index in arr2) {
 *     console.log(arr2[index]);  // Prints the element at the given index
 * }
 */

const arr2 = [1, 2, 3, 4];
for (const index in arr2) {
    console.log(arr2[index]);  // Prints each element of the array
}


/**
 * forEach Loop
 * The `forEach` method is used to iterate over arrays. It simplifies looping and automatically increments the index.
 * 
 * Syntax:
 * arr.forEach(function(element) {
 *     // Do something with the element
 * });
 * 
 * Example using `forEach`:
 * arr.forEach(function(a) {
 *     console.log(a);  // Prints each element of the array
 * });
 */

// Using `forEach` with a regular function:
arr.forEach(function(a) {
    console.log(a);  // Prints each element of the array
});

// Using `forEach` with an arrow function:
arr.forEach((a) => {
    console.log(a);  // Prints each element of the array
});

// Using a named function:
function abc(a) {
    console.log(a);  // Prints the element passed to the function
}

// Passing the function name to `forEach`:
arr.forEach(abc);  // This will pass each element of `arr` to the `abc` function


/**
 * Common Use Case: Iterating Over an Array of Objects
 * The `forEach` loop is commonly used to iterate over an array of objects, especially when you need to access specific properties.
 */

// Example with an array of objects:
const arr4 = [
    { first: 'Himanshu', last: 'Sharma' },
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' }
];

// Iterating over an array of objects and printing a specific property:
arr4.forEach((item) => {
    console.log(item.first);  // Prints the 'first' property of each object
});

