// The charCodeAt() method returns an integer between 0 and 65535
// representing the UTF - 16 code unit at the given index.
// if index out of bound or negative then NaN;
// if we don't pass anything then default is 0;

const str = "hello world";

console.log(str.charCodeAt(1)); // 101
console.log(str.charCodeAt(-1)); // NaN
console.log(str.charCodeAt(3.4)); // 108
console.log(str.charCodeAt(8)); // 114
