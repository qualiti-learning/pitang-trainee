/* eslint-disable indent */
import prisma from '@prisma/client'
import Joi from 'joi'
import Controller from './Controller.js'

const { Room, SeatStatus, SeatType } = prisma

const schema = Joi.object({
    sessionDate: Joi.date().required(),
    room: Joi.string().required().valid(
        ...Object.values(Room)
    ),
    caption: Joi.boolean().required(),
    movie: Joi.object({
        connect: Joi.object({
            id: Joi.string().required()
        })
    }),
    SessionSeats: Joi.any()
})

class SessionController extends Controller {
    constructor () {
        super({
            entity: 'session',
            validationSchema: schema,
            prismaOptions: {
                include: {
                    movie: true, Ticket: true, SessionSeats: true
                }
            }
        })

        this.excludeColumns = [
            { line: 'A', columns: [1, 3] },
            { line: 'B', columns: [3] }
        ]
        this.maxOfColumns = 5
        this.maxOfRows = 5
    }

    generateSeats () {
        const seats = []
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

        for (let x = 0; x < this.maxOfRows; x++) {
            for (let y = 0; y < this.maxOfColumns; y++) {
                const column = y + 1
                const line = alphabet[x]

                const isExcluded = this.excludeColumns.find((excludeColumn) =>
                    excludeColumn.columns.includes(column) && excludeColumn.line === line)

                if (isExcluded) {
                    continue
                }

                seats.push({
                    line,
                    column,
                    type: SeatType.STANDARD,
                    status: SeatStatus.AVAILABLE
                })
            }
        }

        return seats
    }

    store (request, response) {
        const movieId = request.body.movieId

        delete request.body.movieId

        request.body = {
            ...request.body,
            movie: {
                connect: {
                    id: movieId
                }
            },
            SessionSeats: {
                createMany: { data: this.generateSeats() }
            }
        }

        super.store(request, response)
    }
}

export default SessionController
