import UserModel from "../model/UserModel.js";

class UserController {
  async index(request, response) {
    const users = await UserModel.find().lean();

    response.send(users);
  }
  async getOne(request, response) {
    const id = request.params.id;

    const user = await UserModel.findById(id);

    if (user) {
      return response.send(user);
    }

    response.status(404).send({ message: "User not exist" });
  }
  async store(request, response) {
    const { email, password, phones, name } = request.body;

    const user = await UserModel.create({ email, name, password, phones });

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
      password,
      phones,
    });

    if (!user) {
      return response.status(404).send({ message: "User not found" });
    }

    response.send({ user });
  }
}

export default UserController;
