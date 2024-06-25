// The flat() method creates a new array by flattening a nested array up to the specified depth.
// Syntax: arr.flat(depth)
// The flat() method takes a single parameter:
// depth - Integer specifying how deep a nested array should be flattened. Its default value is 1.
// Returns a flatted array with the sub-array elements concatenated into it.
// does not change the original array.
// removes empty slots in arrays.
//
//

// 3 nested array
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2
let flattenArray = numbers.flat(2);

// new flatten array
console.log(flattenArray);

let array_with_holes = [1, , [6, , [8, , 9, [10, , 11]], 7], 3];

// removes holes in the array
let flattedArray = array_with_holes.flat(2);

console.log(flattedArray); // [ 1, 6, 8, 9, [ 10, <1 empty item>, 11 ], 7, 3 ]
