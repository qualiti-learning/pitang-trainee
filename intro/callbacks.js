const names = ["Eduarda", "Keven", "Natalia", "Iago", "João"];

const namesUpdated = [];

names.forEach((name, index) => {
  namesUpdated.push(name + index);
});

const namesWithIndex = names.map((name, index) => {
  return {
    name,
    index,
  };
});

console.log(namesWithIndex);

// const sum = (a, b, callback) => callback(a + b);

// // sum(1, 1, (total) => total * 2000);
// sum(1, 1, (total, multiplier = 2000) => console.log(total * multiplier));
