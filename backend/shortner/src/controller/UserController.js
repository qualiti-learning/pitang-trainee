import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcryptjs";
import dotenv from 'dotenv'

import UserModel from "../model/UserModel.js";

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

class UserController {
  hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  }

  async getOne(request, response) {
    const id = request.params.id;

    const user = await UserModel.findById(id);

    if (user) {
      return response.send(user);
    }

    response.status(404).send({ message: "User not exist" });
  }

  async index(request, response) {
    const users = await UserModel.find().lean();

    response.send(users);
  }

  async login(request, response) {
    const { email, password } = request.body

    const user = await UserModel.findOne({ email }).lean();

    if (!user) {
      return response.status(404).send({message: "User not found"})
    }

    if (bcrypt.compareSync(password, user.password)) {
      delete user.password;

      const token = jsonwebtoken.sign(user, JWT_SECRET);

      return response.send({token})
    }

    response.status(404).send({message: "Password Invalid"})
  }

  async store(request, response) {
    const { email, password, phones, name } = request.body;

    const user = await UserModel.create({ email, name, password: this.hashPassword(password), phones });

    response.send(user);
  }

  async remove(request, response) {
    const { id } = request.params;

    const user = await UserModel.findById(id);

    if (user) {
      await user.remove();

      response.send({ message: "User deleted" });
    }

    return response.status(404).send({ message: "User not found" });
  }

  async update(request, response) {
    const { id } = request.params;
    const { email, name, password, phones } = request.body;

    const user = await UserModel.findByIdAndUpdate(id, {
      email,
      name,
      password: this.hashPassword(password),
      phones,
    });

    if (!user) {
      return response.status(404).send({ message: "User not found" });
    }

    response.send({ user });
  }
}

export default UserController;
