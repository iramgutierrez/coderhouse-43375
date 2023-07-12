const express = require('express')
const handlebars = require('express-handlebars')

const viewsRouterFn = require('./routers/viewsRouter')
const socketServer = require('./utils/io')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const PORT = 8080

const httpServer = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

const io = socketServer(httpServer) // socketServer

const users = []

const messages = []
io.on('connection', socket => {
  console.log('Nuevo cliente conectado', io.sockets)

  socket.on('joinChat', username => {
    users.push({
      name: username,
      socketId: socket.id
    })

    socket.broadcast.emit('notification', `${username} se ha unido al chat`)

    socket.emit('notification', `Bienvenid@ ${username}`)
    socket.emit('messages', JSON.stringify(messages))
  })

  socket.on('newMessage', message => {
    const user = users.find(user => user.socketId === socket.id)

    const newMessage = {
      message,
      user: user.name
    }
    messages.push(newMessage)

    io.emit('message', JSON.stringify(newMessage))
  }) 
})

app.get('/healthcheck', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

const viewsRouter = viewsRouterFn(io)

app.use('/', viewsRouter)