// The codePointAt() method returns an integer that denotes
// the Unicode point value of a character in the string.
// if out of bound then undefined

const str = "hello world";

console.log(str.codePointAt(1)); // 101
console.log(str.codePointAt(-1)); // undefined
console.log(str.codePointAt(3.4)); // 108
console.log(str.codePointAt(8)); // 114
console.log(str.codePointAt()); // 104 - default value is 0
