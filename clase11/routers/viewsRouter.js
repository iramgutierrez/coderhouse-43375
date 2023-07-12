const { Router } = require('express')

const viewsRouterFn = (io) => {
  const viewsRouter = new Router()

  const usernames = []

  viewsRouter.get('/login', (req, res) => {
    return res.render('login')
  })

  viewsRouter.post('/login', (req, res) => {
    const user = req.body

    const username = user.name

    usernames.push(username)

    // io.emit('newUser', username)

    return res.redirect(`/chat?username=${username}`)
  })

  viewsRouter.get('/chat', (req, res) => {
    return res.render('index')
  })

  return viewsRouter
}

module.exports = viewsRouterFn