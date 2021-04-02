import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ msg: 'View a Note' })
})

router.post('/', (req, res) => {
  res.json({ msg: 'Create a Note' })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({ msg: `View a Note ${id}` })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  res.json({ msg: `Update a Note ${id}` })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({ msg: `Delete a Note ${id}` })
})

export default router
