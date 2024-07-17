const arr = [1, 2, 3, 2, 1, 2, 1, 2, 3, 4, 1, 1, 2];

const data = [...new Set(arr)];
console.log(data);

const array = [1, 2, 3, 1, 2, 4, 5];
const uniqueArray = array.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(uniqueArray);
