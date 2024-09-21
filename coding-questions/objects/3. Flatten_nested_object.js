const nested = {
  a: {
    b: 1,
    c: {
      d: 2,
    },
  },
};

const nested1 = { a: { b: 1, c: { d: 2 } }, e: 3 };

const flattenObj = function (obj) {
  const flat = {};

  const recursiveSearch = (obj, prefix = "") => {
    for (let [key, val] of Object.entries(obj)) {
      const currentKey = prefix ? `${prefix}.${key}` : key;
      if (typeof val === "object" && val !== null) {
        recursiveSearch(val, currentKey);
      } else {
        flat[currentKey] = val;
      }
    }
  };

  recursiveSearch(obj);

  return flat;
};

console.log(flattenObj(nested));
console.log(flattenObj(nested1));
