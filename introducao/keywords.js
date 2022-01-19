try {
  const username = "kevenn";
  username = "José";

  console.log(username);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Deu um TypeError", error.message);
  }
}

console.log("Fim do programa 123!");
