import { Router } from 'express'
import logger from '../helpers/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.info('Inside Root Path')
  const title = process.env.title || 'Server'
  res.send({ msg: title })
})

export default router
