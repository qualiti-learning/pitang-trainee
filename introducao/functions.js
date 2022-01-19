function sum(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }

  throw new Error("Você passou um dos parâmetros diferente de number");
}

const sum1 = function (a, b) {
  return sum(a, b);
};

const sum2 = (a, b) => sum(a, b);

console.log(sum(10, 20));
console.log(sum1(20, 40));
console.log(sum2(40, 60));

(() => {
  console.log("Olá!");
})();
