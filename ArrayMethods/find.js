// The find() method returns the ***VALUE*** of the first array element that
//  satisfies the provided test function.
// If it couldn't find then it will return undefined.

const arr = [1, 2, 2, 3, 4, 5, 6, 7];

const res = arr.find((v) => v % 3 == 0);

console.log(res); // 3
