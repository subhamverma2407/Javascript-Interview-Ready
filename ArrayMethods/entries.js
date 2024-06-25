// The entries() method returns a new Array Iterator object containing key/value pairs for each array index.
// Note. arr.entries() returns an iterator, Object.entries returns a nested array containing [key, value]/[index,item];

const arr = [1, 2, 3, 4, 5];

for (let [index, val] of arr.entries()) {
  console.log(index, val);
}

for (let [index, val] of Object.entries(arr)) {
  console.log(index, val);
}

// Question: Convert array to object .
const res = [
  [2, 4],
  [3, 9],
  [4, 16],
].reduce((acc, [i, v]) => {
  return {
    ...acc,
    [i]: v,
  };
}, {});
console.log(res);
