import Prisma from '@prisma/client';
import Joi from 'joi';
import Controller from './Controller.js'

const { SessionRoom, SeatType, SeatStatus } = Prisma;

const schema = Joi.object({
  room: Joi.string().required().valid(...Object.values(SessionRoom)),
  sessionDate: Joi.date().required(),
  price: Joi.number().required().precision(6).positive(),
  movieId: Joi.string().required()
})

class SessionController extends Controller {
  maxLines = 5
  maxColumns = 5
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z']

  generateSeats() {
    const seats = [];

    for (let z = 0; z < this.maxColumns; z++) {
      for (let y = 0; y < this.maxLines; y++) {
        const column = z + 1;
        const line = this.alphabet[y];

        seats.push({
          column, line, disabled: false,
          state: false,
          name: `${line}${column}`,
          type: "STANDARD"
        })
      }
    }

    return seats;
  }

  constructor() {
    super('session', {
      findMany: {
        include: { SessionSeats: true }
      }
    })
  }

  store(request, response) {
    const { room, sessionDate, price, movieId } = request.body;

    const validation = schema.validate({ room, sessionDate, price, movieId })

    if (validation.error) {
      return response.status(400).json(validation)
    }

    request.body = {
      room,
      price,
      sessionDate,
      SessionSeats: {
        createMany: {
          data: this.generateSeats()
        }
      },
      movie: { connect: { id: movieId } }
    }

    super.store(request, response)
  }

  update(request, response) {
    const { room, sessionDate, price, movieId } = request.body;

    const validation = schema.validate({ room, sessionDate, price, movieId })

    if (validation.error) {
      return response.status(400).json(validation)
    }

    request.body = {
      room,
      price,
      sessionDate,
      movie: { connect: { id: movieId } }
    }

    super.update(request, response)
  }

  async updateSeat(request, response) {
    const { sessionId, seatId } = request.params;
    const { disabled, state, type } = request.body;

    const seatSchema = Joi.object({
      disabled: Joi.boolean(),
      state: Joi.valid(...Object.values(SeatStatus)),
      type: Joi.valid(...Object.values(SeatType)),
    });

    const sessionSeat = {
      disabled, state, type
    }

    const validate = seatSchema.validate(sessionSeat);

    if (validate.error) {
      return response.status(401).json(validate.error)
    }

    const sessionSeatUpdated = await this.prismaClient.sessionSeats.update(
      { data: sessionSeat, where: { id: seatId } }
    )

    response.json(sessionSeatUpdated)
  }
}

export default SessionController
