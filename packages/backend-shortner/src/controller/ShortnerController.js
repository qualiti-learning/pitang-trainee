import crypto from 'crypto'
import userAgent from 'user-agent'
import ShortnerModel from '../model/ShortnerModel.js'

class ShortnerController {
  async index(request, response) {
    const shortners = await ShortnerModel.find({ user: request.loggedUser._id }).lean()

    response.json(shortners)
  }

  async store(request, response) {
    const { link, name, expiredDate } = request.body
    const [hash] = crypto.randomUUID().split('-')

    const shortner = await ShortnerModel.create({
      user: request.loggedUser._id,
      hash,
      link,
      name,
      expiredDate
    })

    response.json(shortner)
  }

  async update(request, response) {
    const { id } = request.params
    const { link, name, expiredDate } = request.body

    const shortner = await ShortnerModel.findByIdAndUpdate(
      id,
      {
        link,
        name,
        expiredDate
      },
      { new: true }
    )

    response.json(shortner)
  }

  async remove(request, response) {
    const { id } = request.params

    try {
      const shortner = await ShortnerModel.findById(id)

      if (shortner) {
        await shortner.remove()

        response.json({ message: 'Shortner Removed' })
      }
    } catch (error) {
      response.status(400).json({ message: 'Unexpected Error' })
    }
  }

  async getOne(request, response) {
    const { id } = request.params

    try {
      const shortner = await ShortnerModel.findById(id)

      if (shortner) {
        return response.json({ shortner })
      }

      response.status(404).json({ message: 'Shortner not found' })
    } catch (error) {
      console.log(error.message)
      response.status(400).json({ message: 'Unexpected Error' })
    }
  }

  async redirect(request, response) {
    const { hash } = request.params

    const userAgentDetailed = userAgent.parse(request.headers['user-agent'])

    const metadata = {
      ip: request.ip,
      language: request.headers['accept-language'],
      userAgent: request.headers['user-agent'],
      userAgentDetailed
    }

    const shortner = await ShortnerModel.findOne({ hash })

    if (shortner) {
      if (shortner.expired) {
        return response.json({ message: 'Link expired' })
      }

      shortner.hits++
      shortner.metadata.push(metadata)

      await shortner.save()

      return response.redirect(shortner.link)
    }

    response.json({ message: 'Shortner not found' })
  }
}

export default ShortnerController
