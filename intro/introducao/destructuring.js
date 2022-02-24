// Destructuring & Rest Object

const person = {
  name: "Keven",
  lastName: "Leone",
  region: {
    city: "Recife",
    country: "Brasil",
    state: "Pernambuco",
  },
};

const person_2 = {
  ...person,
  name: "Guilherme",
  lastName: "Lima",
};

// function getUser(user) {
//   const {
//     name,
//     region: { city },
//   } = user;

//   console.log({ name, city, restRegion, restUser });
// }

function getUsers([
  {
    name: nameUser1,
    region: { city: cityUser1 },
  },
  {
    name: nameUser2,
    region: { city: cityUser2 },
  },
]) {
  console.log(cityUser1, cityUser2);
}

getUsers([person, person_2]);

// const {
//   name: namePerson,
//   lastname,
//   region: { state, ...region },
// } = person;

// console.log(region);

// const name = person.name;
// const state = person.region.state;
// const city = person.region.city;

// Destructuring & Rest Array

const users = ["Keven", "Maria", "João", "Bruno", "Marianna"];

const [keven, maria] = users;

// const keven = names[0];
// const joao = names[1];
// const maria = names[2];
// const murilo = names[3];
// const guilherme = names[4];

// console.log({ keven, joao, maria, users });
