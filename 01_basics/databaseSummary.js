/**
 * JavaScript Data Types
 * 
 * **Primitive Data Types** (passed by value):
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Symbol: Creates unique identifiers.
 * 7. BigInt: Represents large integers.
 * 
 * **Non-Primitive Data Types** (passed by reference):
 * 1. Array
 * 2. Object
 * 3. Function
 * 
 * **Type System**
 * - JavaScript is dynamically typed.
 * - Type safety can be enhanced with TypeScript.
 * 
 * **Symbol Example:**
 * const id1 = Symbol('123');
 * const id2 = Symbol('123');
 * // id1 !== id2 (each Symbol is unique)
 * 
 * **Object Example:**
 * let obj = { name: "him" };
 * 
 * **Function Example:**
 * const greet = function() {
 *   console.log("Hello");
 * };
 * 
 * **Data Type and `typeof` Output:**
 * | Data Type          | typeof Output    |
 * |--------------------|------------------|
 * | Integer            | "number"         |
 * | Floating Point     | "number"         |
 * | Character          | "string"         |
 * | Boolean            | "boolean"        |
 * | Null               | "object"         |
 * | Undefined          | "undefined"      |
 * | String             | "string"         |
 * | Array              | "object"         |
 * | Object             | "object"         |
 * | Function           | "function"       |
 */
