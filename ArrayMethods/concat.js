// It take n number of arguments and concat all in one array and return a single array.
// It creates a shallow copy of array.

const arr = [1, 2, [1, 2, 3], 4];
const arr1 = [5, 6, 7];
const arr3 = [9, 10, 11];
const elem = "abc";
const arr2 = arr.concat(arr3, elem, { a: "abcd" }, undefined, null);
console.log(arr2);
// OP: [
//   1,
//   2,
//   [ 1, 2, 3 ],
//   4,
//   9,
//   10,
//   11,
//   'abc',
//   { a: 'abcd' },
//   undefined,
//   null
// ]

// It can concatenate any value given to it.
