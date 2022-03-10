import { Router } from 'express'

import MovieController from '../controllers/MovieController'

const movieController = new MovieController()

const router = Router()

router.get('/movie', movieController.index.bind(movieController))
router.get('/movie/:id', movieController.getOne.bind(movieController))
router.put('/movie/:id', movieController.update.bind(movieController))
router.delete('/movie/:id', movieController.remove.bind(movieController))
router.post('/movie', movieController.store.bind(movieController))

export default router
