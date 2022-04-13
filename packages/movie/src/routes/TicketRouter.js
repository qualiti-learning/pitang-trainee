import { Router } from 'express'
import TicketController from '../controllers/TicketController.js'

const router = Router()

const controller = new TicketController()

router.get('/ticket', controller.index.bind(controller))
router.post('/ticket', controller.store.bind(controller))
router.get('/ticket/:id', controller.getOne.bind(controller))
router.delete('/ticket/:id', controller.remove.bind(controller))
router.put('/ticket/:id', controller.update.bind(controller))

export default router
