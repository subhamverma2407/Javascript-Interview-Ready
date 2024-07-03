const obj1 = {
  name: "abc",
  age: 23,
  skills: ["javascript", "html", "css"],
};

const obj2 = {
  name: "abc",
  age: 23,
  skills: ["javascript", "html", "css"],
};

// Here both objects are same in terms of key value but reference is different.
// Suppose we want to compare two objects then

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
