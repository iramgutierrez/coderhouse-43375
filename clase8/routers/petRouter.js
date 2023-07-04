const { Router } = require('express')
const uploader = require('../utils')

const petRouter = Router()

const pets = [
]

petRouter.use((req, res, next) => {
  console.log('Middleware a nivel router')

  return next()
})

petRouter.get('/', async (req, res) => {
  const gender = req.query.gender

  if (!gender) {
    return res.send(pets)
  }

  const petsFiltered = pets.filter(pet => pet.gender === gender)

  return res.json(petsFiltered)
})

petRouter.get('/:petId', async (req, res) => {
  const petId = parseInt(req.params.petId)

  const pet = pets.find(pet => pet.id === petId)

  if (!pet) {
    return res.status(404).json({
      error: 'Pet not found'
    })
  }

  return res.send(pet)
})

petRouter.post('/', uploader.single('file'), (req, res) => {
  console.log({ file: req.file })
  const pet = req.body

  pet.id = pets.length + 1
  pet.path = req.file && req.file.originalname

  pets.push(pet)

  return res.status(201).json(pet)
})

petRouter.put('/:petId', (req, res) => {
  const data = req.body

  const petId = parseInt(req.params.petId)

  const pet = pets.find(pet => pet.id === petId)

  if (!pet) {
    return res.status(404).json({
      error: 'Pet not found'
    })
  }

  pet.name = data.name || pet.name
  pet.breed = data.breed || pet.breed
  pet.gender = data.gender || pet.gender

  return res.json(pet)
})

petRouter.delete('/:petId', (req, res) => {
  const petId = parseInt(req.params.petId)

  const petIndex = pets.findIndex(pet => pet.id === petId)

  if (petIndex === -1) {
    return res.status(404).json({
      error: 'Pet not found'
    })
  }

  pets.splice(petIndex, 1)

  return res.status(204).json({})
})

module.exports = petRouter