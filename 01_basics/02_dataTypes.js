"use strict"; // Treat all files for new versions
alert("Hello"); // This alert works only in web browsers, not in Node.js

// Standards are written by ECMA (TC39)
// Refer to MDN for documentation created by Mozilla

/*
Primitive Data Types:
- Number
- BigInt
- String
- Boolean
- null: A type and standalone value representing empty
  Example: For faulty temperature sensors, return null instead of 0.
- undefined: Indicates a value has not been assigned, also a type
- Symbol
*/

/**
 * typeof: Tells us the type
 * typeof null is "object"
 * typeof undefined is "undefined"
 */


Here's a table comparing Primitive and Non-Primitive (Reference) data types in JavaScript:

| Category          | Data Type   | Description                                                                 | Example                             |
|-----------------------|-----------------|---------------------------------------------------------------------------------|-----------------------------------------|
| Primitive         | String       | A sequence of characters (text).                                                 | `"Hello"`                               |
|                   | Number       | Represents numeric values (integers and floating point).                        | `42`, `3.14`                            |
|                   | BigInt       | Represents integers with arbitrary precision (used for very large numbers).      | `1234567890123456789012345678901234567890n` |
|                   | Boolean      | Represents a logical entity with two possible values: `true` or `false`.         | `true`, `false`                         |
|                   | undefined    | Represents an uninitialized variable or missing value.                          | `let x; console.log(x); // undefined`   |
|                   | null         | Represents the intentional absence of any object value.                         | `let y = null;`                         |
|                   | Symbol       | Represents a unique and immutable identifier.                                    | `const sym = Symbol('id');`            |
| Non-Primitive     | Object       | A collection of key-value pairs (can store various types).                       | `{ name: 'John', age: 30 }`            |
|                   | Array        | A special type of object used for ordered collections of values.                | `[1, 2, 3, 4]`                         |
|                   | Function     | A block of code that can be invoked/called and executed.                        | `function greet() { console.log('Hello'); }` |
|                   | Date         | Represents date and time in JavaScript.                                          | `new Date('2024-11-09')`                |
|                   | RegExp       | Represents a regular expression used for pattern matching in strings.           | `/\d+/g`                                |
|                   | Error        | Represents runtime errors in JavaScript.                                        | `new Error('Something went wrong');`    |

### Key Differences:

| Aspect            | Primitive Data Types                                       | Non-Primitive (Reference) Data Types            |
|-----------------------|---------------------------------------------------------------|-----------------------------------------------------|
| Mutability        | Immutable (cannot be changed directly)                        | Mutable (can be changed directly)                  |
| Storage           | Stored by value (copies the actual value)                     | Stored by reference (stores a reference to the value) |
| Memory Allocation | Uses less memory and is more efficient                        | Uses more memory and can be more complex           |
| Examples          | `Number`, `String`, `Boolean`, `BigInt`, `undefined`, `null`   | `Object`, `Array`, `Function`, `Date`, `RegExp`, `Error` |


