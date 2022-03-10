import Joi from 'joi'
import Controller from './Controller'
import * as prisma from '@prisma/client'
import { Request, Response } from 'express'

const { TicketCategory } = prisma

class TicketController extends Controller {
  constructor() {
    super('ticket')
  }

  async store(request: Request, response: Response): Promise<any> {
    const { category, seatId, sessionId } = request.body

    const schema = Joi.object({
      seatId: Joi.string().required(),
      sessionId: Joi.string().required(),
      category: Joi.string().valid(...Object.values(TicketCategory))
    })

    const validate = schema.validate({ category, seatId, sessionId })

    if (validate.error) {
      return response.status(400).json(validate.error)
    }

    const userId = 'ca8afd92-10e8-4ed9-ad91-165a7ea08ebc'

    const ticket = await this.prismaClient.ticket.create({
      data: {
        category,
        paymentStatus: true,
        user: { connect: { id: userId } },
        session: { connect: { id: sessionId } },
        seat: { connect: { id: seatId } }
      }
    })

    await this.prismaClient.sessionSeats.update({
      data: { state: 'BLOCKED' },
      where: { id: seatId }
    })

    response.json(ticket)
  }
}

export default TicketController
