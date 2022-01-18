/**
 * @description Sum two values...
 * @param {Number} a first value to be sum
 * @param {Number} b second value to be sum
 * @returns {Number} poqwekpqepoqkweopkqpeq
 */

function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Você passou um parâmetro que não é number.");
}

const sum1 = function (a, b) {
  return a + b;
};

const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;

(() => {
  console.log("Anonymous Function");
})();

// const totalSum1 = sum(456, function () {});
// const totalSum2 = sum(456, () => {});

// console.log(totalSum);
