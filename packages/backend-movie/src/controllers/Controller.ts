import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
import prismaClient from '../prisma'
import logger from '../utils/logger'

class Controller {
  public model: string;
  public prismaClient: PrismaClient;
  public client: any;
  public prismaOptions: {
    findMany: any,
  }

  constructor(model: string, prismaOptions = {
    findMany: {}
  }) {
    this.model = model
    this.prismaClient = prismaClient
    this.client = prismaClient[model]
    this.prismaOptions = prismaOptions

    if (!this.client) {
      logger.error(`Model: ${model} not found on Prisma Schema`)
    }
  }

  /**
  * @description Get One Registry by Id according to Model name
  * @param {*} request
  * @param {*} response
  * @returns
  */

  async getOne(request: Request, response: Response) {
    const { id } = request.params

    const registry = await this.client.findUnique({ where: { id } })

    if (!registry) {
      logger.error(`Registry with id: ${id} not found`)

      return response.status(404).json({ message: 'Registry not found' })
    }

    response.json(registry)
  }

  async index(request: Request, response: Response) {
    const registries = await this.client.findMany(this.prismaOptions.findMany)

    response.json(registries)
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params

    try {
      await this.client.delete({ where: { id } })

      response.json({ message: 'Registry removed' })
    } catch (error) {
      logger.error(`Registry with id: ${id} not found`)

      response.status(404).json({ message: 'Registry not found' })
    }
  }

  async store(request: Request, response: Response) {
    try {
      const registry = await this.client.create({
        data: request.body
      })

      response.json(registry)
    } catch (error: any) {
      logger.error(error.message)

      response.status(400).json({ message: 'Fail to store entity: ' + this.model })
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params

    try {
      const registry = await this.client.update(
        {
          data: request.body,
          where: { id }
        })

      response.json(registry)
    } catch (error) {
      logger.error(`Registry with id: ${id} not found`)

      response.status(404).json({ message: 'Registry not found' })
    }
  }
}

export default Controller
