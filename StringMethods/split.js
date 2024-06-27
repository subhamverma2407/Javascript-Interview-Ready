// The split() method divides a string into a list of substrings and returns them as an array.
// The split() method takes in:
// 1=> separator (optional) - The pattern (string or regular expression)
//  describing where each split should occur.
// 2=>  limit (optional) - A non-negative integer limiting the
//  number of pieces to split the given string into.
// Returns an array of split strings;

const str = "hello world , this is a , great , learning.";

console.log(str.split(",")); // [ 'hello world ', ' this is a ', ' great ', ' learning.' ]
