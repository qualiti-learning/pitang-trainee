import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

import UserModel from "../model/UserModel.js";

dotenv.config();

const { JWT_SECRET } = process.env;

const hashPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  const hash = bcryptjs.hashSync(password, salt);

  return hash;
};

class UserController {
  async getOne(request, response) {
    const { id } = request.params;

    try {
      const user = await UserModel.findById(id);

      if (user) {
        return response.send(user);
      }

      response.status(404).send({ message: "User not found" });
    } catch (error) {
      console.error(error.message);

      response.status(400).send({ message: "An unexpected error happened" });
    }
  }

  async index(request, response) {
    const users = await UserModel.find();

    response.send(users);
  }

  async login(request, response) {
    const { email, password } = request.body;

    const user = await UserModel.findOne({ email }).lean();

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    if (!bcryptjs.compareSync(password, user.password)) {
      return response.status(404).json({ message: "Password Invalid" });
    }

    const token = jsonwebtoken.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      JWT_SECRET
    );

    response.json({ token });
  }

  async remove(request, response) {
    const { id } = request.params;

    const user = await UserModel.findById(id);

    if (user) {
      await user.remove();

      return response.send({ message: "User removed" });
    }

    response.status(404).send({ message: "User not found" });
  }

  async store(request, response) {
    const { name, phones, email, password, birthDate, state } = request.body;

    const user = await UserModel.create({
      name,
      phones,
      email,
      password: hashPassword(password),
      birthDate,
      state,
    });

    response.send({ message: "User Created!", user });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, phones, email, password, birthDate, state } = request.body;

    const user = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        phones,
        email,
        password: hashPassword(password),
        birthDate,
        state,
      },
      {
        new: true,
      }
    );

    response.send(user);
  }
}

export default UserController;
