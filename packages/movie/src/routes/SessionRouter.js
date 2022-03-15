import { Router } from 'express'
import SessionController from '../controllers/SessionController.js'

const router = Router()

const controller = new SessionController()

router.get('/session', controller.index.bind(controller))
router.post('/session', controller.store.bind(controller))
router.get('/session/:id', controller.getOne.bind(controller))
router.delete('/session/:id', controller.remove.bind(controller))
router.put('/session/:id', controller.update.bind(controller))

export default router
