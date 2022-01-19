// Example 1

function loop(values, callback) {
  for (const value of values) {
    callback(value);
  }
}

loop([1, 2, 3, 4, 5], (value) => console.log(value * 100));

// Example 2

function greeting(message, callback) {
  const usuario = "keven";
  const multiplicador = 11222000;

  callback(message, usuario, multiplicador);
}

greeting("Olá, bem vindo!", function (message, usuario) {
  console.log(`${message} ${usuario}`);
});

greeting(12345, function (message, usuario, multiplicador) {
  console.log(message * multiplicador);
});
