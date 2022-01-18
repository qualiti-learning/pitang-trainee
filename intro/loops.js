const student = {
  name: "Keven",
  city: "Recife",
  state: "Pernambuco",
};

const MAX_COUNT = 19;

for (let i = 0; i <= MAX_COUNT; i++) {
  //   console.log(`Aluno ${i}`);
}

for (const key in student) {
  //   console.log(key, student[key]);
}

for (const value of [1, 2, 3, 4, 5]) {
  //   console.log(value);
}

let i = 0;

while (i < MAX_COUNT) {
  console.log("Rodando... " + i);

  i++;
}

// ["Eduardo", "Joao", "Miguel"].forEach((nome, index) => {
//   console.log(nome, index);
// });
