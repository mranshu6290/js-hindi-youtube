/*
All primitive data types start with uppercase. 
Use `typeof` to check the type:
- `typeof score` or `type of(score)` are both valid.
NaN (Not a Number) has a type of "number," but it is not a valid number.
*/
let score = 33; // Ensure 100% conversion to number
let numberInInt = Number(score);
score = null; // Number conversion output is 0
let score1 = undefined; // Number conversion output is NaN
score = ""; // Output: false
score = "anshu"; // Output: true


// just exam

/**
 * console log If string is first then string output
 * 
 * If string later than Nunbers will be aded fuirst and then string aded later
 * 
 * console.log ("1"+1+2) // 112//this is all string output
 * 
 * console.log (1+1+"2") // 22 //this is all string output
 */

console.log ("1"+1+2)

console.log (1+1+"2")