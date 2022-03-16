import cors from 'cors'
import dotenv from 'dotenv'
import express, {Express} from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import router from './routes'

dotenv.config()

const PORT = process.env.PORT || 3333

class App {
  public express: Express

  constructor() {
    this.express = express();

    this.initializeMiddlewares();
    this.initializerRoutes();
  }

  private initializeMiddlewares(): void {
    this.express.use(morgan('dev'))
    this.express.use(helmet())
    this.express.use(express.json())
    this.express.use(cors())
  }

  private initializerRoutes(): void {
    this.express.get('/', (request, response) => {
      response.json({ message: 'Hello World 12345' })
    })

    this.express.use('/api', router)
  }

  public listen(): void {
    this.express.listen(PORT, () => {
      console.log(`Server Running PORT: ${PORT}`)
    })
  }
}

const app = new App();

app.listen();
