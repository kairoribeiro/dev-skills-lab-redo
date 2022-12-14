import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

//GET localhost:3000/skills
router.get('/new', skillsCtrl.new)

//POST localhost:3000/skills
router.post('/', skillsCtrl.create)

//DELETE localhost:3000/:id
router.delete('/:id', skillsCtrl.delete)

//GET localhost:3000/:id
router.get('/:id', skillsCtrl.show)

export {
  router
}
