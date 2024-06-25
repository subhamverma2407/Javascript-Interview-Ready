// It removes element form start of the array.
// Modifies original array
// it returns removed element
// if element is empty then undefined is returned

const arr = [1, , 2, 3, 4, 5, 6];
const res = arr.shift();
const res1 = arr.shift();
console.log(res); // 1
console.log(res1); // undefined
