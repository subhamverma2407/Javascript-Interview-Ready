// factory pattern says that. let's assume a factory which produces something.
// factory is the centralised place where we create objects for anything.
// without using new keyword multiple times;

const employee = [];

function Developer(name) {
  this.name = name;
  this.type = "developer";
}

function Tester(name) {
  this.name = name;
  this.type = "tester";
}

function EmployeeFactory() {
  return {
    create: function (name, type) {
      switch (type) {
        case 1:
          return new Developer(name, "developer");
          break;
        case 2:
          return new Tester(name, "tester");
      }
    },
  };
}

function displayEmployee() {
  console.log(`Hi, I am ${this.name}, I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
employee.push(employeeFactory.create("Subham", 1));
employee.push(employeeFactory.create("Rohan", 2));

employee.forEach((item) => {
  displayEmployee.call(item);
});
