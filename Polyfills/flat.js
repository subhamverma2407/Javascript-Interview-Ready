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

const newArr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];

Array.prototype.myFlat = function () {
  let output = [];
  function flatten(arr) {
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        flatten(val);
      } else output.push(val);
    });
    return output;
  }
  return flatten(this);
};

console.log(newArr.myFlat());
