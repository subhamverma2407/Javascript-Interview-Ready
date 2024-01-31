// Sort
// It modifies the array

const arr1 = [4, 3, 2, 5, 1];
const res1 = arr1.sort((a, b) => b - a);
console.log(res1, arr1);

// if it returns -1 then a is placed before b
// if it returns 1 then b is placed before a
// if it returns 0 then it remains unchanged
