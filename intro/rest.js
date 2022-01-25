const sum = (...values) => values.reduce((prev, current) => prev + current);

console.log(sum(1, 1, 2, 2, 3, 10, 20));
