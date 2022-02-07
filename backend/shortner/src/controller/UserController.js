import crypto from "crypto";

import { users } from "../model/UserModel.js";

const Controller = {
  index: (request, response) => {
    response.send(users);
  },
  getOne: (request, response) => {
    const id = request.params.id;

    const user = users.find((user) => user.id === id);

    if (user) {
      return response.send({ user });
    }

    response.status(404).send({ message: "User not exist" });
  },
  store: (request, response) => {
    const { email, name } = request.body;
    const user = { email, name, id: crypto.randomUUID() };

    users.push(user);

    response.send(user);
  },
  remove: (request, response) => {
    const { id } = request.params;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return response.status(404).send({ message: "User not found" });
    }

    users.splice(userIndex, 1);

    response.send({ message: "User deleted" });
  },
  update: (request, response) => {
    const { id } = request.params;
    const { email, name } = request.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return response.status(404).send({ message: "User not found" });
    }

    users[userIndex] = {
      id,
      name,
      email,
    };

    response.send({ user: users[userIndex] });
  },
};

export default Controller;
