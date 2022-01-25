// Spread Object

const person = {
  name: "Keven",
  lastName: "Leone",
  city: "Recife",
};

const student = {
  name: "Natalia",
  lastName: "Leone",
  age: 25,
};

const student2 = { ...person, ...student };

// Spread Array

const fruits = ["Apple", "Banana", "Mango"];
const fruits2 = [...fruits];
