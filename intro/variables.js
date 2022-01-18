console.log(trabalhando); // HOISTING
var trabalhando = true;
const nome = null;
const abc = 123;

const aluno = {
  nome: '"Keven"',
  idade: 25.23,
};

const alunos = [
  "Keven",
  "Eduarda",
  "Iago",
  1,
  2,
  true,
  false,
  {},
  [],
  new Date(),
];

let idade = 25;

idade /= 10;

let x = 3;
let y = 4;

x = 6;

const aluno1 = "keven\n123";
const aluno2 = "leone";
const aluno3 = `${aluno1} ${aluno2} testando 123.... ${x}`;

console.log(aluno3);
