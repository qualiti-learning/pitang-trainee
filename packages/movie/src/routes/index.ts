import { Router } from 'express'
import MovieRouter from './MovieRouter'
import UserRouter from './UserRouter'
import TicketRouter from './TickerRouter'
import SessionRouter from './SessionRouter'

const router = Router()

router.use(MovieRouter)
router.use(UserRouter)
router.use(TicketRouter)
router.use(SessionRouter)

export default router
