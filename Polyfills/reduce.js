const myArr = [1, 2, 3, 4, 5, 6];

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = cb(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

console.log(
  myArr.myReduce((acc, v) => {
    return (acc += v);
  })
);
