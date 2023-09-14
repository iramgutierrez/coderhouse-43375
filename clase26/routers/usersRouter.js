const { Router } = require('express')

const UsersController = require('../controllers/usersController')

const usersRouter = new Router()

const usersController = new UsersController()

usersRouter.get('/', usersController.getAll.bind(usersController))
usersRouter.get('/:id', usersController.get.bind(usersController))
usersRouter.post('/', usersController.create.bind(usersController))
usersRouter.put('/:id', usersController.update.bind(usersController))
usersRouter.delete('/:id', usersController.delete.bind(usersController))

usersRouter.post('/login', usersController.login.bind(usersController))

module.exports = usersRouter