const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const passport = require('passport')

const initializePassport = require('./config/passport.config')
const viewsRouter = require('./routers/viewsRouter')
const sessionRouter = require('./routers/sessionRouter')

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase21?retryWrites=true&w=majority'


mongoose.connect(MONGODB_CONNECT)
  .then(async _ => { 
    console.log('conectado a la base de datos')
  })

const app = express()


// Configuración handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser('secretkey'))

app.use(session({
  store: MongoStore.create({
    mongoUrl: MONGODB_CONNECT,
    ttl: 15
  }),
  secret: 'secretSession',
  resave: true,
  saveUninitialized: true
}))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})


app.use('/api/sessions', sessionRouter)
app.use('/', viewsRouter)

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))