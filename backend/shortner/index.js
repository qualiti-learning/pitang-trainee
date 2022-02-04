const express = require("express");
const crypto = require("crypto");

const app = express();

const PORT = 3000;

app.use(express.json());

const users = [
  {
    id: crypto.randomUUID(),
    name: "Keven",
    city: "Recife",
  },
];

app.get("/api/user", (request, response) => {
  response.send({ users });
});

app.get("/api/user/:id", (request, response) => {
  // Escrever validação:
  // Verificar se o usuário existe, caso não retornar status 404 com mensagem de erro

  const id = request.params.id;
  const user = users.find((user) => user.id === id);

  response.send({ user });
});

app.post("/api/user", (request, response) => {
  const { name, city } = request.body;

  const user = {
    id: crypto.randomUUID(),
    name,
    city,
  };

  users.push(user);

  response.send({ message: "Usuário criado!", user });
});

// Fazer lógica de Update, recebendo parâmetro de usuário e o body
// Buscando o usuário e atualizando o mesmo

// Fazer lógica de Delete, recebendo o parâmetro do usuário (ID) e removendo o da lista
// Se der certo retornar um objeto com mensagem sucesso!

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
