const arr = [1, 2, [3, 4, [5, 6]], 8, [9, [10]]];

const flat = (arr) => {
  return arr.reduce((acc, v) => {
    if (Array.isArray(v)) {
      acc.push(...flat(v));
    } else {
      acc.push(v);
    }
    return acc;
  }, []);
};

console.log(flat(arr));
