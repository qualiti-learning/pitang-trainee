// Number, Array, Boolean, Date, Error, Function, JSON, Math, Object, RegExp, String, Map, Set, WeakMap e WeakSet, entre outros.

console.log(Number("123"));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

const todayDate = 20;

// Array

Array(10);
Array.isArray([]);

// Boolean

Boolean("kevenleone");
// !!"kevenleone";

// Date

const today = new Date();

console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getSeconds());
console.log(today.toISOString());

today.setMonth(2); // March
today.setDate(19);
today.setFullYear(2020);

// REST-APIS - JSON

const person = {
  name: "Keven",
  age: 25.11,
  college: {
    name: "POLI",
  },
  working: true,
  brothers: ["Karine", "Cláudia", "Maurício"],
  brothers123: [1234, { a: 1 }, "qwe"],
};

const personString = JSON.stringify(person);

// console.log(personString);
// console.log(JSON.parse(personString));

const fullname = "KEVEN,leone,dos,santos".replace(/,/g, "-");

String.prototype.replaceAll = function (search, replace) {
  const value = this.valueOf();
  const regex = new RegExp(search, "g");

  return value.replace(regex, replace);
};

console.log("Keven,Leone,Dos,Santos".replaceAll(",", "--"));

// console.log(fullname);
// console.log(fullname.split("-"));

// RegExp

RegExp(/,/);
