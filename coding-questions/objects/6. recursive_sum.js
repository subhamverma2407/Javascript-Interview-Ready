const obj = {
  A: 2,
  B: 3,
  C: {
    D: 4,
    E: {
      F: 6,
    },
  },
  G: 9,
};

const objectSum = function (obj) {
  let sum = 0;

  function search(obj) {
    for (let key in obj) {
      if (Number.isInteger(obj[key])) {
        sum += obj[key];
      } else {
        search(obj[key]);
      }
    }
  }
  search(obj);
  console.log(sum);
};

objectSum(obj);
