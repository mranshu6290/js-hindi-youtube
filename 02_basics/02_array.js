// If we push one array to another, the entire array will not be merged; it will be added as a single element.

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7];

// If we push arr2 to arr1, arr2 will be added as the 4th element.
arr1.push(arr2); // arr1 becomes [1, 2, 3, 4, [4, 5, 6, 7]]

// To merge two arrays into a single array, use concat().
const arr3 = arr1.concat(arr2); // arr3 is [1, 2, 3, 4, 4, 5, 6, 7]
console.log(arr3);

// Another way to combine arrays is using the spread operator.
// The spread operator "spreads" the elements of the arrays into a new array.
const arr4 = [...arr1, ...arr2]; // arr4 is [1, 2, 3, 4, 4, 5, 6, 7]
console.log(arr4);

// If an array contains nested arrays, we can flatten it using flat().
// flat(depth) will flatten the array to the specified depth, or Infinity to flatten all levels.
const nestedArr = [[1, 2], [3, 4], [5, [6, 7]]];
const flatArr = nestedArr.flat(Infinity); // flattens all levels
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6, 7]

// To convert a string or an array-like object to an array, use Array.from().
// Note: If you have a key-value object, it will return an empty array since it doesn't know how to convert it.
const arr11 = Array.from('himanshu'); // Converts the string to an array of characters
console.log(arr11); // Output: ['h', 'i', 'm', 'a', 'n', 's', 'h', 'u']

// We can also use Array.of() to create an array from a list of arguments.
const arr12 = Array.of(1, 2, 3, 4); // Creates an array from the provided elements
console.log(arr12); // Output: [1, 2, 3, 4]
