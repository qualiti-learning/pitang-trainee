import prisma from '@prisma/client'
import Joi from 'joi'
import Controller from './Controller.js'

const { TicketType } = prisma

const schema = Joi.object({
  price: Joi.number().required().precision(2),
  type: Joi.string().required().valid(
    ...Object.values(TicketType)
  ),
  session: Joi.object({
    connect: Joi.object({
      id: Joi.string().required()
    })
  }),
  user: Joi.object({
    connect: Joi.object({
      id: Joi.number().required()
    })
  })
})

class TicketController extends Controller {
  constructor () {
    super({
      entity: 'ticket',
      validationSchema: schema,
      prismaOptions: {
        include: {
          session: {
            include: {
              movie: true
            }
          },
          user: true
        }
      }
    })
  }

  store (request, response) {
    const { sessionId, userId } = request.body

    delete request.body.sessionId
    delete request.body.userId

    request.body = {
      ...request.body,
      session: {
        connect: {
          id: sessionId
        }
      },
      user: {
        connect: {
          id: userId
        }
      }
    }

    super.store(request, response)
  }
}

export default TicketController
