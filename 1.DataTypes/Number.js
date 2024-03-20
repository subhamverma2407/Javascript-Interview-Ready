let a = 123;
console.log(a); //123

a = 523.34;
console.log(a); // 523.34

a = 4e5;
console.log(a); // 400000

a = 4e-5;
console.log(a); // 0.00004

// NaN
console.log("-------------------");
a = 10;
let res = a + "hello";
console.log(res); // '4hello'

res = a - "hello";
console.log(res); // NaN

// Infinity & -Infifinty
console.log("-------------------");

a = 2 / 0;
console.log(a); // Infinity
a = -2 / 0;
console.log(a); // -Infifinty

a = 0 / 0;
console.log(a); // NaN

console.log([2] / 2); // 1

console.log("2" / 2); // 1

console.log([2] / 0); // Infinity

// NUMBER METHODS

// => isNan  (Global) tries to convert arguments into number
console.log("-------------------");
console.log(isNaN("a")); // true
console.log(isNaN(123)); // false
console.log(isNaN(Infinity)); // false
console.log(isNaN([2, 3, 4])); // true
console.log(isNaN([2])); // false
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN(32.34)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN({})); // true
console.log(isNaN(true)); // false

// => Number.isNaN() => Does not try to convert argument into number
console.log("-------------------");
console.log(Number.isNaN("a")); // false
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN([2, 3, 4])); // false
console.log(Number.isNaN([2])); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(32.34)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN({})); // false
console.log(Number.isNaN(true)); // false

// => isFinite => one is global and another is Number.isFinite
console.log("-------------------");
console.log(isFinite(123)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(null)); // true as null is converted to 0
console.log(isFinite(undefined)); // false
console.log(isFinite([2])); // true
console.log(isFinite("2")); // true
console.log(isFinite([2, 3, 4])); // false

// isInteger
console.log(" isInteger()-------------------");
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger("123")); // false
console.log(Number.isInteger([123])); // false
console.log(Number.isInteger(null)); // false
console.log(Number.isInteger(undefined)); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger([])); // false
