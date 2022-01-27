const users = [
  { name: "Zidane", age: 25 },
  { name: "Leone", age: 25 },
  { name: "Keven", age: 19 },
  { name: "Matheus", age: 19 },
  { name: "Debora", age: 19 },
  { name: "Amanda", age: 45, city: "Rio" },
];

const userSorted = [...users].sort((userA, userB) =>
  userA.name.localeCompare(userB.name)
);

const frutas = ["Maçã", 1, "Banana", "Pera", "Abacaxi"];

const maca = frutas.find((fruta) => fruta === "Maçã");

const macaIndex = frutas.findIndex((fruta) => fruta === "Maçã");

const user = users.find((user) => user.name === "Keven");

const usersWithNameKeven = users.filter((user) => user.name === "Keven");

const newUsers = users.map(({ name, age, ...user }, index) => {
  return {
    user,
    name,
    age,
    index,
  };
});

users.forEach(({ name, age, ...user }, index) => {
  console.log({
    user,
    name,
    age,
    index,
  });
});

const usuariosMaiorDeIdade = users.every(({ age }) => age >= 18);
const alguemEMaiorDeIdade = users.some(({ age }) => age <= 18);
