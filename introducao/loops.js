const student = {
  name: "Keven",
  city: "Recife",
  state: "Pernambuco",
};

const names = ["Keven", "João", "Maria"];

for (let i = 0; i <= 9; i++) {
  //   console.log(i);
}

// For In

for (const key in student) {
  //   console.log(key, student[key]);
}

// For Of

for (const value of names) {
  //   console.log(value);
}

const maxCount = 100;
let totalCount = 0;

while (totalCount < maxCount) {
  console.log("Data atual: " + new Date());

  totalCount++;
}
