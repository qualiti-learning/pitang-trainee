import { Router } from 'express'
import MovieRouter from './MovieRouter.js'
import UserRouter from './UserRouter.js'
import TicketRouter from './TickerRouter.js'
import SessionRouter from './SessionRouter.js'

const router = Router()

router.use(MovieRouter)
router.use(UserRouter)
router.use(TicketRouter)
router.use(SessionRouter)

export default router
