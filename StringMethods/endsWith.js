// It checks if a string ends with a certain string.
// Takes two parameters.one is string other is the length till which we have to check;
// returns true or false;

const str = "hello world";

console.log(str.endsWith("ld")); // true
console.log(str.endsWith("lo", 5)); // true
console.log(str.endsWith("sn")); // false
