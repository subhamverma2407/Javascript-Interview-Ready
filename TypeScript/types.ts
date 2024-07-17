let add: (a: number, b: number) => void;

add = function (a: number, b: number) {
  console.log(a + b);
};

add(2, 3);

interface Person {
  name: string;
  age: number;
  salary: number;
  department: string;
  expertise: string;
}

const person1: Partial<Person> = {
  name: "subham",
};

const person2: Omit<Person, "name" | "age"> = {
  salary: 2000,
  department: "HR",
  expertise: "React",
};

interface MyInterface1 {
  name: string;
  age: number;
  address: {
    country: string;
  };
}

interface MyInterface1 {
  hobby: string;
}

const data: MyInterface1 = {
  name: "subham",
  age: 23,
  address: {
    country: "INDIA",
  },
  hobby: "singing",
};

data?.address?.country;
