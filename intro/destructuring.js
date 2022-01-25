// Destructuring Array with Rest

const [{ name: nameKeven }, { name: nameIago }] = [
  { name: "Keven" },
  { name: "Iago" },
];

const [keven, leone, ...users] = "keven,leone,iago,eduarda".split(",");

// const [...users] = ["Eduarda", "Iago", "Keven"];

// const eduarda = users[0];
// const iago = users[1];
// const keven = users[2];

// Replace to

console.log(users);

// Destructuring Object with Rest

const person = {
  a: [1, 2, 3],
  b: 2,
  name: "Keven",
  lastName: "Leone",
  region: {
    country: "EUA",
    state: "Pernambuco",
    city: "Recife",
  },
};

const {
  a: [first, ...etc],
  name: nome,
  ...restPerson
} = person;

// console.log({
//   nome,
//   city,
//   restRegion,
//   restPerson,
// });
