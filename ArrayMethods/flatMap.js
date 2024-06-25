// The flatMap() method first maps each element of an array using a
// mapping function, then flattens it into a new array.
// Syntax: arr.flatMap(callback(currentValue),thisArg)
// Returns a new array after mapping every element using callback
// The flatMap() method does not change the original array.
// The flatMap() method is equivalent to array.map().flat().

let numbers = [1, 2, 3, [8, 9, , [11, 12], 10], 4, 5];

// each element of the array is squared and later flattened
const resultingArray = numbers.flatMap((x) => (Array.isArray(x) ? x : x * x));

console.log(resultingArray);

// Output:
// [1, 4, 9, 8, 9, [11, 12], 10, 16, 25];
