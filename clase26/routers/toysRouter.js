const { Router } = require('express')

const ToysController = require('../controllers/toysController')

const toysRouter = new Router()

const toysController = new ToysController()

toysRouter.get('/', toysController.getAll.bind(toysController))
toysRouter.get('/:id', toysController.get.bind(toysController))
toysRouter.post('/', toysController.create.bind(toysController))
toysRouter.put('/:id', toysController.update.bind(toysController))
toysRouter.delete('/:id', toysController.delete.bind(toysController))

module.exports = toysRouter