const myArr = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
};

console.log(
  myArr.filter((v, i) => {
    return v > 3;
  })
); // [4,5,6]
