const { Router } = require('express')

const { io } = require('../utils/app')

// const viewsRouterFn = (io) => {
  const viewsRouter = new Router()

  const usernames = []

  viewsRouter.get('/login', (req, res) => {
    return res.render('login')
  })

  viewsRouter.post('/login', (req, res) => {
    const user = req.body

    const username = user.name

    usernames.push(username)
    console.log({ username })
    io.emit('newUser', username)

    return res.redirect(`/chat?username=${username}`)
  })

  viewsRouter.get('/chat', (req, res) => {
    return res.render('index')
  })

  module.exports = viewsRouter

  // return viewsRouter
// }

// module.exports = viewsRouterFn