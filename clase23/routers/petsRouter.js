const { Router } = require('express')

const petsRouter = Router()

const pets = []

petsRouter.post('/', (req, res) => {
  const pet = {
    name: req.body.name,
    specie: req.body.specie
  }

  pets.push(pet)

  return res.status(201).json(pet)
})

petsRouter.param('pet', (req, res, next, value) => {
  const pet = pets.find(pet => pet.name === value)

  req.pet = pet

  return next()
})

petsRouter.get('/:pet([a-zA-Z%20]+)', (req, res) => {
  const pet = req.pet // pets.find(pet => pet.name === req.params.pet)

  return res.json(req.pet)
})

petsRouter.put('/:pet([a-zA-Z%20]+)', (req, res) => {
  const pet = req.pet //pets.find(pet => pet.name === req.params.pet)

  req.pet.adopted = true 

  return res.json(req.pet)
})

module.exports = petsRouter