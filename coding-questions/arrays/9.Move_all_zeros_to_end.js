function moveZeros(n, a) {
  let j = -1;
  for (let i = 0; i < n; i++) {
    if (a[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return a;

  for (let i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans);
