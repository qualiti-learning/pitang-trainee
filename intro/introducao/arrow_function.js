const elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// function getTest() {
//   return function (abc) {
//     return abc;
//   };
// }

const getTest = (a) => (b) => (c) => (d) => a + b + c + d;

console.log(getTest(1)(2)(3)(4));

// const innerFunction = getTest();

// innerFunction("123");

elements.map(function (element) {
  return element.length;
});

elements.map((element) => {
  return element.length;
});

elements.map((element) => {
  return element.length;
});

elements.map((element) => element.length);
elements.map(({ length: lengthFooBArX }) => lengthFooBArX);
elements.map(({ length }) => length);
