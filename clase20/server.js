const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const app = express()

const fileStorage = FileStore(session)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(flash())

app.use(cookieParser('secretkey'))

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase20?retryWrites=true&w=majority'

app.use(session({
  /*store: new fileStorage({
    path: './sessions',
    ttl: 100,
    retries: 0
  }),*/
  store: MongoStore.create({
    mongoUrl: MONGODB_CONNECT,
    ttl: 15
  }),
  secret: 'secretSession',
  resave: true,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

app.get('/otro', (req, res) => {
  return res.json(req.session)
})

app.get('/session', (req, res) => {
  console.log(req.session)
  if (!req.session.counter) {
    req.session.counter = 1
    req.session.name = req.query.name

    return res.json(`Bienvenido ${req.session.name}`)
  } else {
    req.session.counter++

    return res.json(`${req.session.name} has visitado la página ${req.session.counter} veces`)
  }
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))