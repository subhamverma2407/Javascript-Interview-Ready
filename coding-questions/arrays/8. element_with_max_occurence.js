const arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4];
const hashMap = {};
let max = -Infinity;

arr.forEach((v, i) => {
  if (hashMap[v]) {
    hashMap[v] += 1;
  } else hashMap[v] = 1;

  // console.log(v, hashMap[v]);
  max = hashMap[v] > max ? v : max;
});

console.log(max);
