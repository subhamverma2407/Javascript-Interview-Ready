// Ques : 1
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a); //456

// Concepts : object to primitive, a[b] tries to convert b to String (toString of {key:"b"}) is [Object object]
// hence a[b] and a[c] both points to same key.

//====================================================

// Ques 2:
// const obj = {
//   1: "a",
//   1: "b",
//   [1]: "c",
//   1: "abcde",
// };
// console.log(obj);
// console.log(obj[1]);
// No [1] represnts that our key is a string. since we alreade have '1' as a key so it will override the value.

//====================================================

// Ques 3:
// const person = {
//   name: "subham",
//   age: 23,
// };

// const student = {
//   id: 1,
//   gpa: 3.5,
// };

// Object.setPrototypeOf(student, person);
// console.log(student.name); // subham

// Inheritence

//====================================================

// Ques 4:

// const person1 = {
//   name: "Jane",
//   age: 23,
// };
// const person2 = Object.create(person1);
// console.log(Object.getPrototypeOf(person2)); // person1 object
// console.log(person2.age); //23

// Object. create allows you to manually set the prototype while creating the object

//====================================================
