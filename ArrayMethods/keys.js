//The keys() method returns a new Array Iterator object that
//  contains the keys for each element in the array.

const arr = [2, 4, 1, 4, 5, , 6];
for (let v of arr.keys()) {
  console.log(`${v} , ${arr[v]}`);
}
