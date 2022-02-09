import crypto from "crypto";

import users from "../model/UserModel.js";

const Controller = {
  getOne(request, response) {
    const id = request.params.id;
    const user = users.find((user) => user.id === id);

    if (user) {
      return response.send(user);
    }

    response.status(404).send({ message: "User not found" });
  },
  index(request, response) {
    response.send({ users });
  },
  remove(request, response) {
    const id = request.params.id;
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      users.splice(userIndex, 1);

      return response.send({ message: "User removed" });
    }

    response.status(404).send({ message: "User not found" });
  },
  store(request, response) {
    const name = request.body.name;
    const city = request.body.city;

    if (name && city) {
      const user = {
        id: crypto.randomUUID(),
        name,
        city,
      };

      users.push(user);

      return response.send({ message: "Usuário criado!", user });
    }

    response.status(400).send({ message: "data invalid" });
  },
  update(request, response) {
    const id = request.params.id;
    const { name, city } = request.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      users[userIndex] = { id, name, city };

      return response.send({ user: users[userIndex] });
    }

    response.status(404).send({ message: "User not found" });
  },
};

export default Controller;
