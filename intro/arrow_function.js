var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

elements.map(function (element) {
  return element.length;
}); // esta sentença retorna o array: [8, 6, 7, 9]

elements.map((element) => {
  return element.length;
});

elements.map((element) => {
  return element.length;
});

elements.map(({ length }) => length);

elements.map(({ length: lengthFooBArX }) => lengthFooBArX);

// function sum() {
//   console.log(arguments);
// }

// const sum_arrow = () => {
//   console.log(arguments);
// };

// sum_arrow("Keven", "Leone", "Debora");
