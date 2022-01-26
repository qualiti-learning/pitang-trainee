// Spread Array

const names = ["Guilherme", "Bruno", "Keven"];
const names_2 = ["Marianna", "Eduardo"];
const names_3 = [...names_2, ...names, "Test"];

// console.log({ names_3 });

// Spread Object

const person = {
  name: "Keven",
  region: {
    country: "Brasil",
    city: "Recife",
    state: "Pernambuco",
  },
};

const person_2 = {
  ...person,
  region: {
    ...person.region,
    city: "São Paulo",
    state: "São Paulo",
  },
  name: "Leone",
};

delete person.name;

console.log({ person_2 });
