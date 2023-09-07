const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')

const { generateToken, verifyToken } = require('./utils/jwt')
const initializePassport = require('./config/passport.config')

const app = express()
app.use(cookieParser('secretkey'))

initializePassport()



app.use(passport.initialize())
app.use(cors({
  origin: 'http://localhost:5500',
  //origin: 'http://localexample.com:5500',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = []

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

app.post('/register', (req, res) => {
  const user = users.find(user => user.email === req.body.email)

  if (user) {
    return res.status(401).json({
      error: 'El usuario ya existe'
    })
  }

  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }

  const token = generateToken({
    name: req.body.name,
    email: req.body.email,
    role: 'user'
  })

  users.push(newUser)

  return res.status(201).json({ ...newUser, access_token: token })
})

app.post('/login', (req, res) => {
  const user = users.find(user => user.email === req.body.email)

  if (!user) {
    return res.status(401).json({
      error: 'El usuario no existe'
    })
  }

  if (user.password !== req.body.password) {
    return res.status(401).json({
      error: 'Contraseña incorrecta'
    })
  }

  const token = generateToken({
    name: user.name,
    email: user.email,
    role: 'user'
  })

  return res.cookie('authTokenCookie', token, {
    maxAge: 60*60*1000,
    httpOnly: true
  }).send(user)
})

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({
      error: 'Necesitas enviar un token de acceso'
    })
  }

  try {
    const payload = await verifyToken(token)

    req.user = payload.user
  } catch (e) {
    return res.status(401).json({
      error: 'Token de acceso invalido'
    })
  }
  return next()
}

const passportCall = (strategy) => {
  return (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {
      if (err) {
        return next(err)
      }

      if (!user) {
        return res.status(401).json({
          error: info.messages ? info.messages : info.toString()
        })
      }

      req.user = user

      return next()
    })(req, res, next)
  }
}

const authorizationMiddleware = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Debes iniciar sesión'
      })     
    }

    if (req.user.role !== role) {
      return res.status(403).json({
        error: 'No tienes permiso para consumir este recurso'
      })
    }

    return next()
  }
}

// app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
app.get('/profile', passportCall('jwt'), authorizationMiddleware('user'), (req, res) => {

  return res.json(req.user)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

