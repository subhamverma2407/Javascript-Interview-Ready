// The findIndex() method returns the index of the first array element that satisfies
// the provided test function or else returns - 1.

const arr = [1, 2, 3, 4, 5, 6];

const res = arr.findIndex((v) => v % 5 == 0);

console.log(res); // index of element 5

const res1 = arr.findIndex((v) => v > 10);

console.log(res1); // -1 since no such element found
