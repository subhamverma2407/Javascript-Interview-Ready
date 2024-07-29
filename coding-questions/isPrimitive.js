// Check if any variable is a primitive or not;

function isPrimitive(val) {
  return val !== Object(val);
}

console.log(isPrimitive(1));
console.log(isPrimitive([]));
console.log(isPrimitive({}));
console.log(isPrimitive("hello"));
