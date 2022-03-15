import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const router = Router()

const controller = new UserController()

router.get('/user', controller.index.bind(controller))
router.post('/user', controller.store.bind(controller))
router.get('/user/:id', controller.getOne.bind(controller))
router.delete('/user/:id', controller.remove.bind(controller))
router.put('/user/:id', controller.update.bind(controller))

export default router
