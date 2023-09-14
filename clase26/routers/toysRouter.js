const { Router } = require('express')

const ToysController = require('../controllers/toysController')
const UserMiddleware = require('../middleware/usersMiddleware')

const toysRouter = new Router()

const toysController = new ToysController()
const usersMiddleware = new UserMiddleware()

/**
 * 
 
- Cualquier usuario logueado puede consultar los juguetes
- Solo los usuarios gerentes o adminstradores pueden editar juguetes
- Solo los usuarios administradores pueden crear nuevos juguetes
- Solo los usuarios adminstradores pueden borrar juguetes
 * 
 */

toysRouter.get('/', 
  usersMiddleware.isAuth.bind(usersMiddleware), 
  toysController.getAll.bind(toysController)
)

toysRouter.get('/:id', 
  usersMiddleware.isAuth.bind(usersMiddleware), 
  toysController.get.bind(toysController)
)

toysRouter.post('/', 
  usersMiddleware.isAuth.bind(usersMiddleware),
  usersMiddleware.hasRole('ADMIN'),
  toysController.create.bind(toysController),
)

toysRouter.put('/:id', 
  usersMiddleware.isAuth.bind(usersMiddleware),
  usersMiddleware.hasRole('MANAGER', 'ADMIN'),
  toysController.update.bind(toysController)
)

toysRouter.delete('/:id', 
  usersMiddleware.isAuth.bind(usersMiddleware),
  usersMiddleware.hasRole('ADMIN'),
  toysController.delete.bind(toysController)
)

module.exports = toysRouter