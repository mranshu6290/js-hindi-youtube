// Falsy Values in JavaScript
/**
 * The following values are considered falsy:
 * - 0             // Number zero
 * - -0            // Negative zero
 * - BigInt(0)     // BigInt representation of zero
 * - ""            // Empty string
 * - null          // Null value
 * - undefined     // Undefined value
 * - NaN          // Not-a-Number
 */

// Truthy Values in JavaScript
/**
 * Any value that is not falsy is considered truthy. This includes:
 * - Non-empty strings (e.g., "0", " ", "false" are all truthy)
 * - Non-zero numbers (e.g., 1, -1)
 * - Any object, including functions (e.g., function(){} is truthy)
 */

// Checking for Empty Values
// To check if a user's email length is zero, use the length property:
if (userEmail.length === 0) {
    // This means the email is empty
}

// To check if an object is empty, first convert it into an array of keys using Object.keys():
const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0; // Returns true if the object is empty
};

// Example usage:
const obj = {};
if (isObjectEmpty(obj)) {
    // The object is empty
}

// Important Note for Interviews:
// Be aware of the following comparisons, as they may produce unexpected results:
console.log(false == 0);    // Returns true
console.log(false == "");    // Returns true
console.log(0 == "");        // Returns true

// Nullish Coalescing Operator (??)

/**
 * The nullish coalescing operator is used to provide a default value
 * when dealing with null or undefined values. It does not consider
 * other falsy values like 0 or an empty string.
 */

// Example usage:

let val1;

// Case 1: Assigning a value
val1 = 5 ?? 10; // Output: 5 (5 is neither null nor undefined)

// Case 2: Handling null
val1 = null ?? 10; // Output: 10 (since val1 is null, it takes the default value)

// Case 3: Handling undefined
val1 = undefined ?? 15; // Output: 15 (since val1 is undefined, it takes the default value)

// Case 4: Chaining with nullish coalescing
val1 = null ?? 10 ?? 20; // Output: 10 (it evaluates from left to right and stops at the first defined value)

// Note: The operator only evaluates to the right when the left operand is null or undefined.


// Ternary Operator

/**
 * The ternary operator is a shorthand for an if-else statement.
 * It follows the syntax: condition ? valueIfTrue : valueIfFalse
 */

// Example usage:
const condition = true;
const result = condition ? "It's true!" : "It's false!"; // Output: "It's true!"

// You can use the ternary operator in combination with the nullish coalescing operator:
const userAge = null;
const ageMessage = userAge ?? "Age not provided"; // Output: "Age not provided"
