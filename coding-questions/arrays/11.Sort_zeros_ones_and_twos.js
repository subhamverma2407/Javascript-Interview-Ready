const arr = [2, 0, 2, 1, 1, 0];

let low = 0;
let mid = 0;
let high = arr.length - 1;

const swap = (index1, index2) => {
  let t = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = t;
};

while (mid <= high) {
  if (arr[mid] === 0) {
    swap(low, mid);
    low++;
    mid++;
  } else if (arr[mid] === 1) {
    mid++;
  } else if (arr[mid] === 2) {
    swap(mid, high);
    high--;
  }
}

console.log(arr);
