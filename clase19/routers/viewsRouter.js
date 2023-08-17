const express = require('express')

const viewsRouter = express.Router()

const sessionMiddleware = (req, res, next) => {
  if (req.session.user) {
    return res.redirect('/profile')
  }

  return next()
}

viewsRouter.get('/register', sessionMiddleware, (req, res) => {
  return res.render('register')
})

viewsRouter.get('/login', sessionMiddleware, (req, res) => {
  return res.render('login')
})

viewsRouter.get('/profile', (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login')
  }

  return next()
}, (req, res) => {
  const user = req.session.user
  return res.render('profile', { user })
})

module.exports = viewsRouter