/*const express = require('express')
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

const io = socketServer(httpServer) // socketServer */

const viewsRouter = require('./routers/viewsRouter')

const { app } = require('./utils/app')


app.get('/healthcheck', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

// const viewsRouter = viewsRouterFn(io)

app.use('/', viewsRouter)