// forEach loop can't return anything directly.
// To filter or transform data, we typically use `filter` or `map` instead.

/**
 * Using `filter`:
 * The `filter` method is used to create a new array with all elements that pass a condition.
 * It doesn't modify the original array.
 * 
 * Syntax:
 * arr.filter(callback(currentValue, index, array)) - returns an array of elements that meet the condition.
 */

// Example: Filtering values less than 4
const arr = [1, 2, 3, 4, 5];

// Using `filter` to return values less than 4
const v = arr.filter((num) => {
    return num < 4;
});
console.log(v); // Output: [1, 2, 3]

// `filter` can accept multiple conditions using `&&` (AND) or `||` (OR) operators
const v2 = arr.filter((num) => {
    return num < 4 && num > 1; // Filtering values between 1 and 4
});
console.log(v2); // Output: [2, 3]


/**
 * Achieving the same thing with `forEach` (not recommended for filtering):
 * You can manually filter elements using `forEach`, but it's less efficient.
 * `forEach` doesn't return anything, so we need to use an external array to store the results.
 */

// Using `forEach` to filter elements manually:
const arr1 = [];
arr.forEach(function (num) {
    if (num < 4) {
        arr1.push(num); // Adding the value to the new array if it meets the condition
    }
});
console.log(arr1); // Output: [1, 2, 3]


/**
 * Using `map`:
 * `map` is used to create a new array by transforming each element. It returns a new array of the same length.
 * Unlike `filter`, `map` transforms elements in the array according to the provided callback function.
 */

// Example: Adding 10 to each number in the array using `map`
const n1 = arr.map(function (num1) {
    return num1 + 10; // Adding 10 to each element
});
console.log(n1); // Output: [11, 12, 13, 14, 15]


/**
 * Chaining Methods:
 * You can chain multiple array methods like `map`, `filter`, etc., to create more complex operations.
 * When chaining, each method returns a new array, which can be used as input for the next method.
 */

// Example: Chaining `map` and `filter`
const n2 = arr
    .map(function (num1) {
        return num1 + 10; // Adding 10 to each element
    })
    .map(function (num1) {
        return num1 + 10; // Adding 10 again
    })
    .filter(function (num1) {
        return num1 < 30; // Keeping only values less than 30
    });

console.log(n2); // Output: [21, 22, 23, 24, 25]  // Transformed values less than 30


/**
 * Using `reduce`:
 * `reduce` is used to accumulate a single result (like summing values or combining objects) from an array.
 * It processes each item in the array and "reduces" it to a single value.
 * 
 * Syntax:
 * arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
 */

// Example: Using `reduce` to calculate the sum of all elements in the array:
const sum = arr.reduce(function (acc, num) {
    return acc + num; // Accumulating the sum of all numbers
}, 0);  // Initial value of the accumulator is 0

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example: Using `reduce` to accumulate values in a different way:
const product = arr.reduce(function (acc, num) {
    return acc * num; // Accumulating the product of all numbers
}, 1);  // Initial value of the accumulator is 1

console.log(product); // Output: 120 (1 * 2 * 3 * 4 * 5)


/**
 * Summary of methods:
 * - `forEach`: Loops through each element of the array but cannot return a new array or value.
 * - `filter`: Returns a new array with elements that pass the condition in the callback.
 * - `map`: Returns a new array with transformed values based on the callback function.
 * - `reduce`: Returns a single value by accumulating the results of the callback function.
 * 
 * `map` and `filter` are typically used when you need to transform or filter data, while `forEach` is used for iteration without creating a new array.
 * `reduce` is used for more complex transformations, such as summing or accumulating values.
 */
