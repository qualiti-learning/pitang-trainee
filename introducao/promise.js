function sleep(ms, message) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, ms)
  );
}

(async () => {
  function sum(a, b, callback) {
    callback(a + b);
  }

  function sumPromise(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a === "number" && typeof b === "number") {
        return resolve(a + b);
      }

      reject("Você passou um parâmetro que não é número");
    });
  }

  async function sumPromise2(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }

    throw new Error("Você passou um parâmetro que não é número");
  }

  //   sum(1, 1, (total) => console.log({ total }));

  await Promise.all([
    sleep(3000, "Sleep 1"),
    sleep(5000, "Sleep 2"),
    sleep(6000, "Sleep 3"),
  ]);

  console.log("Finalizei!");

  //   await sleep(3000, "Sleep 1");
  //   await sleep(1000, "Sleep 2");
  //   await sleep(500, "Sleep 3");

  //   const soma = await sumPromise(1, 1);

  // sum("abc", "def", function () {});

  // Promise

  // Pendent, Resolvido, Error
})();
