// Arrays in JavaScript

// Definition: An array is a collection of multiple items, which can be of different types (e.g., numbers, strings).

// Resizable: Arrays can grow and shrink in size as needed.

// Indexing:
// - 0-based Indexing: The first element is accessed with index 0, the second with 1, etc.
// - Access by Index: Arrays cannot be accessed by strings; you must use numeric indices.

// Types of Copies:
// - Shallow Copy: When you copy an array, it creates a shallow copy, referencing the same elements.
// - Deep Copy: A deep copy creates a completely new array with its own elements, which do not share references with the original.

// Creating Arrays:
// - Array Literals:
//   const myArr = [1, 2, 'him'];
// - Using the `new` Keyword:
//   const myArr2 = new Array(1, 2, 3, 4); // Can use parentheses instead of square brackets.

// Array Methods:
// - push(value): Adds a value to the end of the array.
// - pop(): Removes the last value from the array and returns it.
// - unshift(value): Adds a value to the beginning of the array. (Expensive operation, as it shifts all elements.)
// - shift(): Removes the first element of the array and shifts all remaining elements down.
// - includes(value): Returns true if the value exists in the array; otherwise, returns false.
// - indexOf(value): Returns the index of the value if found; returns -1 if not found.
// - join(separator): Joins all elements of the array into a string, separated by the specified separator.

// Prototypes: Arrays have a prototype that allows you to access various methods and properties.
/*
| Method   | Purpose                                           | Modifies Original Array | Returns                | Syntax                        |
|----------|---------------------------------------------------|-------------------------|------------------------|-------------------------------|
| splice() | Adds or removes elements from an array            | Yes                     | Array of removed items | array.splice(start, deleteCount, item1, item2, ...) |
| slice()  | Creates a new array from a portion of an array    | No                      | New array              | array.slice(start, end)      |
*/

// Example of splice()
const arr = [1, 2, 3, 4];
const removed = arr.splice(1, 2, 5, 6); // arr becomes [1, 5, 6, 4], removed is [2, 3]

// Example of slice()
const arr2 = [1, 2, 3, 4];
const newArr = arr2.slice(1, 3); // newArr is [2, 3]; arr2 remains unchanged
