//The reduce() method executes a reducer function on
// each element of the array and returns a single output value.
// Syntax:  arr.reduce(callback(accumulator, currentValue), initialValue)

// Sum of all elem

const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((acc, v) => {
  acc += v;
  return acc;
}, 0);
console.log(sum);

// Remove duplicates from array;

const dupArray = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
const res = dupArray.reduce((acc, v) => {
  if (acc.indexOf(v) === -1) {
    acc.push(v);
  }
  return acc;
}, []);

console.log(res);

// Grouping Objects by a property

let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
  }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
