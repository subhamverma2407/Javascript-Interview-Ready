arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr2 = [...arr];
const k = 2;
// left :  [3,4,5,6,7,8,1,2];
// right : [7,8,1,2,3,4,5,6];

const reverse = function (arr, start, end) {
  while (start < end) {
    arr[start] += arr[end];
    arr[end] = arr[start] - arr[end];
    arr[start] -= arr[end];
    start++;
    end--;
  }
};

function rotateLeft(arr, length, k) {
  reverse(arr, 0, k - 1);
  reverse(arr, k, length - 1);
  reverse(arr, 0, length - 1);
  return arr;
}

function rotateRight(arr, length, k) {
  reverse(arr, length - k, length - 1);
  reverse(arr, 0, length - k - 1);
  reverse(arr, 0, length - 1);
  return arr;
}

console.log(rotateLeft(arr, arr.length, 2)); //[3, 4, 5, 6, 7, 8, 1, 2]
console.log(rotateRight(arr2, arr2.length, 2)); // [7, 8, 1, 2, 3, 4, 5, 6]
