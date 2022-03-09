/* eslint-disable class-methods-use-this */

import prisma from "../prismaClient.js";

class Controller {
  constructor(entity) {
    this.entity = entity;
    this.prismaEntity = prisma[entity];
  }

  async store(request, response) {
    const { body } = request;

    const registry = await this.prismaEntity.create({
      data: body,
    });

    response.json(registry);
  }

  async index(request, response) {
    const registries = await this.prismaEntity.findMany();

    response.json(registries);
  }

  async update(request, response) {
    const { id } = request.params;
    const { body } = request;

    const registry = await this.prismaEntity.update({
      where: { id },
      data: body,
    });

    response.json(registry);
  }

  async remove(request, response) {
    const { id } = request.params;

    await this.prismaEntity.delete({ where: { id } });

    response.json({ message: `${this.entity.toUpperCase()} Removed` });
  }

  async getOne(request, response) {
    const { id } = request.params;

    const registry = await this.prismaEntity.findUnique({ where: { id } });

    response.json(registry);
  }
}

export default Controller;
