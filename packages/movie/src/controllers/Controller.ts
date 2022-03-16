import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client';
import { ObjectSchema } from 'joi';
import prisma from '../prismaClient'

interface ControllerConstructor {
  entity: string;
  validationSchema?: ObjectSchema;
  prismaOptions?: any
}

class Controller {
  private entity: string;
  public prismaClient: PrismaClient;
  public prismaOptions?: any;
  public validationSchema?: ObjectSchema;
  public prismaEntity: any;

  constructor ({ entity, validationSchema, prismaOptions }: ControllerConstructor) {
    this.entity = entity
    this.validationSchema = validationSchema
    this.prismaOptions = prismaOptions
    this.prismaClient = prisma
    this.prismaEntity = (prisma as any)[entity]
  }

  async store (request: Request, response: Response): Promise<any> {
    const { body } = request

    if (this.validationSchema) {
      const validation = this.validationSchema.validate(body, { abortEarly: false })

      if (validation.error) {
        return response.status(400).json(validation.error.details)
      }
    }

    try {
      const registry = await this.prismaEntity.create({
        include: this.prismaOptions?.include,
        data: body
      })

      response.json(registry)
    } catch (error) {
      console.error(error)

      response.status(400).send({ message: `Failed insert: ${this.entity}` })
    }
  }

  async index (request: Request, response: Response) {
    const registries = await this.prismaEntity.findMany(
      { include: this.prismaOptions?.include }
    )

    response.json(registries)
  }

  async update (request: Request, response: Response) {
    const { id } = request.params
    const { body } = request

    const registry = await this.prismaEntity.update({
      where: { id },
      data: body
    })

    response.json(registry)
  }

  async remove (request: Request, response: Response) {
    const { id } = request.params

    await this.prismaEntity.delete({ where: { id } })

    response.json({ message: `${this.entity.toUpperCase()} Removed` })
  }

  async getOne (request: Request, response: Response) {
    const { id } = request.params

    const registry = await this.prismaEntity.findUnique({ where: { id } })

    response.json(registry)
  }
}

export default Controller
