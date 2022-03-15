import prisma from '@prisma/client'
import Joi from 'joi'
import Controller from './Controller.js'

const { ParentalGuidance } = prisma

const schema = Joi.object({
  parental_guidance: Joi.string().required().valid(
    ...Object.values(ParentalGuidance)
  ),
  languages: Joi.array().items(Joi.string()),
  director: Joi.string().required().min(3).max(50),
  name: Joi.string().required(),
  rating: Joi.number().max(10),
  duration: Joi.number().integer().positive().max(500),
  thumbnail: Joi.string().allow(''),
  description: Joi.string().required().max(10000)
})

class MovieController extends Controller {
  constructor () {
    super({ entity: 'movie', validationSchema: schema })
  }
}

export default MovieController
