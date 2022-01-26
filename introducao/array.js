const names = ["Keven", "Keven", "Leone", "Leonardo", "Joao"];

const users = [
  {
    name: "Keven",
    age: 25,
  },
  {
    name: "Joao",
    age: 13,
  },
  {
    name: "Maria",
    age: 50,
  },
  {
    name: "Marcos",
    age: 17,
  },
];

const index = names.findIndex((value) => {
  return value === "Keven";
});

const value = names.find((name) => {
  return name === "Keven";
});

const values = names.filter((name) => {
  return name !== "Keven";
});

const newNames = names.map((name, index) => {
  return {
    name,
    index,
  };
});

const namesWithIndex = [];

names.forEach((name, index) => {
  if (index % 2 === 0) {
    namesWithIndex.push(name + index);
  }
});

// Every or Some

const usersMaiorDeIdade = users.some((user, index) => {
  return user.age >= 70;
});

console.log({ usersMaiorDeIdade });

// console.log(namesWithIndex);

// console.log({ newNames });
