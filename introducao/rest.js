// Rest Operator

const sum = (...values) =>
  values.reduce((prev, currentValue) => prev + currentValue);

const [keven, maria, joao, ...users] = [
  "Keven",
  "Maria",
  "João",
  "Bruno",
  "Marianna",
];

console.log(sum(1, 1, 1, 2, 3, 10, 30, 111));
