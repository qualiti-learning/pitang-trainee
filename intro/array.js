const frutas = ["Maçã", 1, "Banana", "Pera", "Abacaxi"];

const users = [
  { name: "Keven", age: 25 },
  { name: "Keven", age: 19 },
  { name: "Amanda", city: "Rio" },
];

const maca = frutas.find((fruta) => fruta === "Maçã");
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

console.log(newUsers);
