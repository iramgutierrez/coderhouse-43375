const { Router } = require('express')

const viewsRouter = Router()

viewsRouter.get('/login', (req, res) => {
  return res.render('login')
})

viewsRouter.get('/profile', (req, res) => {
  return res.json({
    session: req.session,
    user: req.user
  })
})

module.exports = viewsRouter