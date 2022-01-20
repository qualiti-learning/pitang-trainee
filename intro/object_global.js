// Conheça os objetos padrão nativos
// Number, Array, Boolean, Date, Error, Function, JSON, Math, Object, RegExp, String, Map, Set, WeakMap e WeakSet, entre outros.

const array = ["Keven", "João", "Lucas"];

String.prototype.replaceAll = function (searchValue, replaceValue) {
  const value = this.valueOf();
  const regex = RegExp(searchValue, "g");

  return value.replace(regex, replaceValue);
};

console.log("keven,leone,dos,santos".replaceAll(",", "-"));

const num = 1234.44;
const names = "Keven, João, Lucas";

// Number

console.log(num.toExponential(2));
console.log(num.toFixed(10));
console.log(num.toString());

// Array

console.log(Array.isArray(array));
console.log(array.join(", "));

// String

const REGEX = /[.*+?^${}()|[\]\\]/g;

console.log(names.split(", "));

const regex = RegExp(/,/g);

console.log(names.replace(regex, "_"));

// Boolean

console.log(Boolean(12)); /// True
console.log(Boolean(0)); /// False

// JSON

const person = {
  name: "'`keven`'",
  lastname: "leone",
};

const personAsString = JSON.stringify(person);
const personAsObject = JSON.parse(personAsString);

console.log(person);
console.log(personAsString);
console.log(personAsObject);

// Date

new Date();
