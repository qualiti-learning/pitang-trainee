import prismaClient from '../prisma.js'
import logger from '../utils/logger.js'

class Controller {
  constructor (model) {
    this.model = model
    this.client = prismaClient[model]

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

  async getOne (request, response) {
    const { id } = request.params

    const registry = await this.client.findUnique({ where: { id } })

    if (!registry) {
      logger.error(`Registry with id: ${id} not found`)

      return response.status(404).json({ message: 'Registry not found' })
    }

    response.json(registry)
  }

  async index (request, response) {
    const registries = await this.client.findMany()

    response.json(registries)
  }

  async remove (request, response) {
    const { id } = request.params

    try {
      await this.client.delete({ where: { id } })

      response.json({ message: 'Registry removed' })
    } catch (error) {
      logger.error(`Registry with id: ${id} not found`)

      response.status(404).json({ message: 'Registry not found' })
    }
  }

  async store (request, response) {
    const registry = await this.client.create({
      data: request.body
    })

    response.json(registry)
  }

  async update (request, response) {
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
