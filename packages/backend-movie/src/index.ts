import cors from 'cors'
import dotenv from 'dotenv'
import express, { response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import logger from './utils/logger'
import routes from './routes/routes'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(
  morgan(':method :url :status :response-time ms - :res[content-length]', {
    stream: {
      write: (message) => logger.http(message.trim())
    }
  })
)
app.use(helmet())
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to PitangFlix' })
})

// Middleware de autenticacao liberar apenas /login /user (POST)

app.listen(PORT, () => {
  logger.info(`Listening PORT: ${PORT}`)
})
