function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}

console.log(isIterable(1));
console.log(isIterable([1, 2, 3]));
console.log(isIterable("string"));
console.log(isIterable({ a: 2 }));
console.log(isIterable(null));
console.log(isIterable(undefined));
