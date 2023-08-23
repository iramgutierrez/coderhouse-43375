const express = require('express')
const { generateToken, verifyToken } = require('./utils/jwt')

const app = express()

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
    email: req.body.email
  })

  users.push(newUser)

  return res.status(201).json({ ...newUser, access_token: token })
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

app.get('/profile', authMiddleware, (req, res) => {
  return res.json(req.user)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

