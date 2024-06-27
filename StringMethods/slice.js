// The slice() method extracts and returns a section of a string.
// takes two arguments, begin and end
// returns a string
// works with negative indices as well

const str = "JavaScript is a very absurd programming language.";

console.log(str.slice(2, 3)); // 'v' start from 2 til 3(exclude 3)
console.log(str.slice(2, 8)); // 'vaScri' start from 2 til 3(exclude 3)

// from 9th to last element till end
console.log(str.slice(-9)); // 'language.'

// from 9th to last element
console.log(str.slice(-9, -1)); // 'language'
