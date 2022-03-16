import { Router } from 'express'

import MovieRouter from './MovieRouter'
import SessionRouter from './SessionRouter'
import TicketRouter from './TickerRouter'
import UserRouter from './UserRouter'

const router = Router()

router.use(MovieRouter)
router.use(SessionRouter)
router.use(TicketRouter)
router.use(UserRouter)

export default router
