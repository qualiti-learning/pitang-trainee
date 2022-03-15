import prisma from '../prismaClient.js'

class Controller {
  constructor ({ entity, validationSchema, prismaOptions }) {
    this.entity = entity
    this.validationSchema = validationSchema
    this.prismaOptions = prismaOptions
    this.prismaClient = prisma
    this.prismaEntity = prisma[entity]
  }

  async store (request, response) {
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

  async index (request, response) {
    const registries = await this.prismaEntity.findMany(
      { include: this.prismaOptions?.include }
    )

    response.json(registries)
  }

  async update (request, response) {
    const { id } = request.params
    const { body } = request

    const registry = await this.prismaEntity.update({
      where: { id },
      data: body
    })

    response.json(registry)
  }

  async remove (request, response) {
    const { id } = request.params

    await this.prismaEntity.delete({ where: { id } })

    response.json({ message: `${this.entity.toUpperCase()} Removed` })
  }

  async getOne (request, response) {
    const { id } = request.params

    const registry = await this.prismaEntity.findUnique({ where: { id } })

    response.json(registry)
  }
}

export default Controller
