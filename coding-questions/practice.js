(() => {
  const arr = [1, 2, 3, 4, 5];
  console.log(Object.fromEntries(arr.entries()));
  const res = {};
  arr.forEach((v, i) => {
    res[i] = v;
  });
  console.log(res);
})();

(() => {
  const array = ["abc", "hello", "subham", "maximumValue"];

  let maxLength = -Infinity;
  let maxIndex = -Infinity;

  array.forEach((v, i) => {
    if (v.length > maxLength) {
      maxIndex = i;
      maxLength = v.length;
    }
  });

  console.log([maxIndex, maxLength, array[maxIndex]]);
})();

(() => {
  const array = ["abc", "hello", "subham", "maximumValue"];
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let firstMaxIndex = -1;
  let secondMaxIndex = -1;

  array.forEach((v, i) => {
    if (v.length > firstMax) {
      secondMax = firstMax;
      secondMaxIndex = firstMaxIndex;
      firstMax = v.length;
      firstMaxIndex = i;
    } else if (v.length > secondMax && v.length < firstMax) {
      secondMax = v.length;
      secondMaxIndex = i;
    }
  });
  console.log([secondMax, secondMaxIndex, array[secondMaxIndex]]);

  let firstShort = Infinity;
  let secondShort = Infinity;
  let firstShortIndex = -1;
  let secondShortIndex = -1;

  array.forEach((v, i) => {
    if (v.length < firstShort) {
      secondShort = firstShort;
      secondShortIndex = firstShortIndex;
      firstShort = v.length;
      firstShortIndex = i;
    } else if (v.length < secondShort && v.length > firstShort) {
      secondShort = v.length;
      secondShortIndex = i;
    }
  });

  console.log([secondShort, secondShortIndex, array[secondShortIndex]]);
})();

(() => {
  const arr = [1, 2, 3, 4, 5, 7, 8, 9];
  const sum = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  });
  const res = ((arr.length + 1) * (arr.length + 1 + 1)) / 2;
  console.log(res - sum);
})();

(() => {
  const arr = [1, 3, 5, 7, 9, 10];
  const target = 11;
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (hash[complement] !== undefined) {
      console.log(complement, arr[i]);
      break;
    } else {
      hash[arr[i]] = true;
    }
  }
})();

(() => {
  const arr = [1, 2, 5, 4, 5];
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[j] < arr[i]) {
      console.log("Not Sorted");
      break;
    }
    j++;
    i++;
  }
})();

(() => {
  const arr = [1, 2, 3, 1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1];
  let hash = {};
  let max = -Infinity;
  let elem;
  arr.forEach((v, i) => {
    hash[v] = (hash[v] || 0) + 1;
    if (hash[v] >= max) {
      max = hash[v];
      elem = v;
    }
  });
  console.log(elem);
})();

(() => {
  const arr = [1, 0, 0, 2, 1, 0, 3, 4, 0, 1, 2, 3, 4, 2, 0, 2, 0];
  const nonZero = arr.filter((v) => v !== 0);
  const zero = arr.filter((v) => v === 0);
  console.log([...nonZero, ...zero]);
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  console.log(arr);
})();

(() => {
  const arr = [1, 0, 0, 2, 1, 0, 3, 4, 0, 1, 2, 3, 4, 2, 0, 2, 0];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  for (let i = j - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    }
  }
  console.log(arr);
})();

(() => {
  const arr = [2, 1, 2, 0, 1, 2, 2, 2, 1, 0, 1, 1, 2, 0];
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  function swap(i1, i2) {
    let t = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = t;
  }
  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(low, mid);
      mid++;
      low++;
    } else if (arr[mid] === 2) {
      swap(mid, high);
      high--;
    } else {
      mid++;
    }
  }
  console.log(arr);
})();

(() => {
  const arr = [1, 2, 3, 1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1];
  const hash = {};
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
    if (hash[arr[i]] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] < firstMax) {
      secondMax = arr[i];
    }
  }
  console.log(secondMax);
  console.log(hash);
})();

(() => {
  const arr = [2, 3, 1, 4, 2, 6, 3, 7, 8, 2, 10, 32, 34];
  let max = -Infinity;
  let secondMax = -Infinity;
  let maxIndex = -1;
  let secondMaxIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      secondMaxIndex = maxIndex;
      max = arr[i];
      maxIndex = i;
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
      secondMaxIndex = i;
    }
  }
  console.log("element ", arr[secondMaxIndex]);
})();

(() => {
  const str = "subham";
  const splitStr = str.split("");
  let i = 0;
  let j = splitStr.length - 1;
  while (i < j) {
    t = splitStr[i];
    splitStr[i] = splitStr[j];
    splitStr[j] = t;
    i++;
    j--;
  }
  console.log(splitStr.join(""));
})();

(() => {
  const str = "madsddam";
  console.log(str.split("").reverse().join("") === str);
})();

(() => {
  const str = "apple";
  const strHash = {};
  for (let item of str) {
    if (strHash[item]) {
      console.log(item);
      break;
    } else {
      strHash[item] = 1;
    }
  }
})();

(() => {
  const str = "statistics";
  const charHash = {};
  for (let item of str) {
    charHash[item] = (charHash[item] || 0) + 1;
  }
  for (item of str) {
    if (charHash[item] === 1) {
      console.log(item);
      break;
    }
  }
})();

(() => {
  const str = "sky is looking blue";
  const result = str.split(" ").reverse().join(" ");
  console.log(result);
  let temp = "";
  const strArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      temp += str[i];
    } else {
      strArray.push(temp);
      temp = "";
    }
  }
  strArray.push(temp);
  let i = 0;
  let j = strArray.length - 1;
  while (i < j) {
    let t = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = t;
    i++;
    j--;
  }
  let res = "";
  for (let i = 0; i < strArray.length; i++) {
    if (i !== strArray.length - 1) {
      res += strArray[i] + " ";
    } else {
      res += strArray[i];
    }
  }
  console.log(res);
})();

(() => {
  const str = "hello";
  const hash = {};
  let max = -Infinity;
  let maxChar = null;
  for (item of str) {
    hash[item] = (hash[item] || 0) + 1;
    if (hash[item] > max) {
      max = hash[item];
      maxChar = item;
    }
  }
  console.log(maxChar);
})();
