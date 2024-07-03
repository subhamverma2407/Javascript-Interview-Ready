const arr = [1, 2, 3, 4, 5];

// Way 1
const obj = {};
arr.forEach((v, i) => {
  obj[i] = v;
});
console.log(obj);

//Way 2

const obj1 = arr.reduce((acc, v, i) => {
  return { ...acc, [i]: v };
}, {});

console.log(obj1);

// Object to array;
// // {
//   "0": 1,
//   "1": 2,
//   "2": 3,
//   "3": 4,
//   "4": 5
// }

// Way 1
const values = Object.values(obj);
console.log(values);

// Way 2
const res = [];
for (let v in obj) {
  res.push(obj[v]);
}
