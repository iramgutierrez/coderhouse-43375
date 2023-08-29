const { Router } = require('express')

const { verifyToken } = require('../utils/jwt')

const viewsRouter = Router()

viewsRouter.get('/login', (req, res) => {
  return res.render('login')
})

viewsRouter.get('/register', (req, res) => {
  return res.render('register')
})

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({
      error: 'Necesitas enviar un token de acceso'
    })
  }

  try {
    const payload = await verifyToken(token)

    req.user = payload.user
  } catch (e) {
    return res.status(401).json({
      error: 'Token de acceso invalido'
    })
  }
  return next()
}

viewsRouter.get('/profile', authMiddleware, (req, res) => {
  return res.json(req.user)
})

module.exports = viewsRouter