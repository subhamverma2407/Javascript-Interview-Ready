// The map() method creates a new array with the results of
//calling a function for every array element.
// map() does not change the original array.
// map() executes callback once for each array element in order.
// map() does not execute callback for array elements without values.
// map() assigns undefined to the new array if the callback function returns undefined or nothing.

const arr = [2, 4, 6, 8, , 10];

const newArr = arr.map((v) => {
  if (v === 8) {
    //do nothing, so if nothing is returned from callback then map will assign undefined to the new array
  } else {
    return v * 2;
  }
});

console.log(newArr);
