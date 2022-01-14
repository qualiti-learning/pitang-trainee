let x = 3; // x contém o valor 3
let y = 4; // y contém o valor 4
x += y; // x agora contém o mesmo valor de y, 4

console.log(x);

let k = undefined;

const z = [
  1,
  1.23,
  22.33,
  2,
  3,
  4,
  "123",
  true,
  false,
  [],
  {},
  new Date(),
  undefined,
  null,
];

const zx = z;

const person = {
  name: "Keven",
  age: 25,
  phones: [123, 456],
};

const person2 = { ...person };

delete person.age;

const name = `keven ${x} ${y}`;

console.log(name);
