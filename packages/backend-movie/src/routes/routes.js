import { Router } from 'express'

import MovieRouter from './MovieRouter.js'
import SessionRouter from './SessionRouter.js'
import UserRouter from './UserRouter.js'

const router = Router()

router.use(MovieRouter)
router.use(SessionRouter)
router.use(UserRouter)

export default router
