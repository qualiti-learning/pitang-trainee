import { Router } from 'express'

import MovieRouter from './MovieRouter'
import SessionRouter from './SessionRouter'
import UserRouter from './UserRouter'
import TicketRouter from './TicketRouter'

const router = Router()

router.use(MovieRouter)
router.use(SessionRouter)
router.use(UserRouter)
router.use(TicketRouter)

export default router
