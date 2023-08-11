const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const handlebars = require('express-handlebars')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Configuración handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(cookieParser('secretkey'))

app.use(session({
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

app.get('/setCookie', (req, res) => {
  return res.cookie('CoderCookie', 'Valor de la cookie', { maxAge: 60000 }).send('Cookie')
})

app.get('/getCookie', (req, res) => {
  return res.send({
    cookies: req.cookies,
    signedCookies: req.signedCookies
  })
})

app.get('/deleteCookie', (req, res) => {
  return res.clearCookie('CoderCookie').send('Cookie removed')
})

app.get('/signedCookie', (req, res) => {
  return res.cookie('SignedCoderCookie', 'Esta es una cookie firmada!', { signed: true }).send('Cookie')
})

app.get('/cookiesForm', (req, res) => {
  return res.render('cookies')
})

app.post('/cookiesForm', (req, res) => {
  return res.cookie('user', req.body, {maxAge: 10000 }).redirect('/cookiesForm')
})

app.get('/session', (req, res) => {
  return res.json(req.session)

  if (!req.session.counter) {
    req.session.counter = 1

    return res.json(`Bienvenido`)
  } else {
    req.session.counter++

    return res.json(`Has visitado la página ${req.session.counter} veces`)
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (!err) {
      return res.send('Logout ok')
    }

    return res.status(500).json({ error: err })
  })
})

const users = [
  {
    username: 'iram',
    password: 'qwerty',
    admin: true
  },
  {
    username: 'carlos',
    password: '123456',
    admin: false
  }
]

app.get('/login', (req, res) => {
  const { username, password } = req.query
  
  const user = users.find(user => user.username === username && user.password === password)

  if (!user) {
    return res.status(401).json({
      error: 'User not found'
    })
  }

  req.session.username = user.username
  req.session.admin = user.admin

  return res.json(user)
})

const authMiddleware = (req, res, next) => {
  if (!req.session.username) {
    return res.status('401').send('Necesitas iniciar sesión para ver esta página.')
  }

  return next()
}

app.get('/auth', authMiddleware, (req, res) => {
  return res.send(`Si puedes ver esta ruta es por que estas loggeado. Bienvenido ${req.session.username}`)
})

const adminMiddleware = (req, res, next) => {
  if (!req.session.admin) {
    return res.status('401').send('Necesitas ser administrador para ver esta página.')
  }
  return next()
}

app.get('/admin',authMiddleware, adminMiddleware, (req, res) => {
  return res.send(`Si puedes ver esta ruta es por que eres administrador. Bienvenido ${req.session.username}`)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

