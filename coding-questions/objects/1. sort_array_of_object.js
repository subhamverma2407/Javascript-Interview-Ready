const employees = [
  {
    name: "Alice",
    department: "Engineering",
    salary: 75000,
  },
  {
    name: "Charlie",
    department: "HR",
    salary: 55000,
  },
  {
    name: "Bob",
    department: "Marketing",
    salary: 60000,
  },
  {
    name: "Eve",
    department: "Finance",
    salary: 70000,
  },
  {
    name: "David",
    department: "Engineering",
    salary: 80000,
  },
];

// Sort based on name;

const res = employees.slice().sort((a, b) => {
  if (a.department < b.department) {
    return -1;
  }
  if (a.department > b.department) {
    return 1;
  } else return 0;
});
console.log(res);

const res1 = employees.slice().sort((a, b) => a.name.localeCompare(b.name)); // more elegant way
console.log(res1);

const res2 = employees.slice().sort((a, b) => {
  if (a.name < b.name) {
    return 1;
  } else if (a.name > b.name) {
    return -1;
  } else return 0;
});

console.log(res2);
