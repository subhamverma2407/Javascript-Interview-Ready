const arr = [1, 2, 3, 8, 4, 5, 6];
let i = arr.length - 1;
let j = i - 1;
let res = true;

while (j >= 0) {
  if (arr[j] > arr[i]) {
    res = false;
    break;
  }
  i--;
  j--;
}

console.log(res);
