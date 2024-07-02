const person = {
  name: "abc",
  displayName: function (message) {
    console.log("my name is", this.name, message);
  },
};

const student = {
  name: "subham",
};

person.displayName.apply(student, ["hello"]);

Function.prototype.myApply = function (context = {}, argArray) {
  context.fn = this;
  context.fn(...argArray);
};

person.displayName.myApply(student, ["hello"]);
