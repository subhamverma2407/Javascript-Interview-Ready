// The includes() method checks if one string can be found inside another string.
// takes two parameters. first is string, other is the length from where to start

const str = "Hello world , this is a great coding repo";

console.log(str.includes("hello")); // false - as it is case sensitive
console.log(str.includes("Hello")); // true
console.log(str.includes("this", 10)); // true
