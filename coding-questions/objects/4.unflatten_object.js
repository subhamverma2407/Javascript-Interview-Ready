const data = { "a.b": 1, "a.c.d": 2 };

const unflatten = (obj) => {
  const res = {};

  for (let [key, val] of Object.entries(obj)) {
    const dataKey = key.split(".");
    dataKey.reduce((acc, item, index) => {
      if (index === dataKey.length - 1) {
        acc[item] = val;
      } else {
        acc[item] = acc[item] || {};
      }
      return acc[item];
    }, res);
  }

  console.log(res);
};

unflatten(data);
