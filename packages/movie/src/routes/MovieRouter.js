import { Router } from 'express'
import MovieController from '../controllers/MovieController.js'

const router = Router()

const controller = new MovieController()

router.get('/movie', controller.index.bind(controller))
router.post('/movie', controller.store.bind(controller))
router.get('/movie/:id', controller.getOne.bind(controller))
router.delete('/movie/:id', controller.remove.bind(controller))
router.put('/movie/:id', controller.update.bind(controller))

export default router
