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
  // console.log(req.flash('error'))
  const error = req.flash('error')[0]
  console.log({ error })
  return res.render('login', { 
    error,
    hasError: error !== undefined
  })
})

viewsRouter.get('/recovery-password', sessionMiddleware, (req, res) => {
  return res.render('recovery-password')
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