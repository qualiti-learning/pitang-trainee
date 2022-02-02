const sumPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject(new Error("Algum dos parâmetros não é número!"));
    }
  });
};

const sum = async (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Algum dos parâmetros não é um número");
};

// sum(1, "2")
//   .then((soma) => {
//     console.log(soma);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function main() {
  const soma = await sum(1, "123");

  console.log({ soma });

  console.log("Termina aqui");
}

main();
