// The lastIndexOf() method returns the last index of occurence of a given substring in the string.
// The lastIndexOf() method takes in:
// substr- The value to search for in the given string.
// fromIndex (optional) - The index to start searching the string
// backwards.By default it is + Infinity.
// If fromIndex >= string.length, the whole string is searched.
// If fromIndex < 0, it is considered to be the same as 0.
// Returns
// the last index of the value in the string if it is present at least once.
// fromIndex if no string is provided explicitly.

// defining a string
var str = "Programming";

var substr = "m";

// find last occurrence of "m" in str
var result = str.lastIndexOf(substr);
console.log(str.lastIndexOf(substr, 21)); // 7
console.log(str.lastIndexOf(substr, -1)); // -1
console.log(result);
