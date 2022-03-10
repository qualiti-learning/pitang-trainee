import { Router } from 'express'
import TicketController from '../controllers/TicketController'

const ticketController = new TicketController()

const router = Router()

router.get('/ticket', ticketController.index.bind(ticketController))
router.get('/ticket/:id', ticketController.getOne.bind(ticketController))
router.put('/ticket/:id', ticketController.update.bind(ticketController))
router.delete('/ticket/:id', ticketController.remove.bind(ticketController))
router.post('/ticket', ticketController.store.bind(ticketController))

export default router
