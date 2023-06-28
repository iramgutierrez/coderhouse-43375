const express = require('express')
const UserManager = require('./UserManager')

const manager = new UserManager()

const app = express()

const template = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
    </head>
    <body>
      <h1 style="color: blue;">Hola</h1>
    </body>
  </html>
  `

app.get('/', (req, res) => {
  return res.send(template)
})

app.get('/contacto', (req, res) => {
  return res.send('Bienvenido a la página de contacto')
})

app.get('/sucursales', (req, res) => {
  return res.send('Bienvenido a la página de sucursales')
})

app.get('/proveedores', (req, res) => {
  return res.send('Bienvenido a la página de proveedores')
})

app.get('/saludo/:name', (req, res) => {
  console.log(req.params)
  return res.send(`Hola ${req.params.name}`)
})

const users = [
  {
    id: 1,
    name: 'Iram',
    lastname: 'Gutiérrez',
    gender: 'M',
  },
  {
    id: 2,
    name: 'Fatima',
    lastname: 'Melgarejo',
    gender: 'F'
  },
  {
    id: 3,
    name: 'Nicolas',
    lastname: 'Aquino',
    gender: 'M'
  },
  {
    id: 4,
    name: 'Francisco',
    lastname: 'Fariña',
    gender: 'M'
  },
]

app.get('/users', async (req, res) => {
  // const products = manager.getProducts(req.query.limit)
  const gender = req.query.gender

  if (!gender) {
    return res.send(users)
  }

  const usersFiltered = users.filter(user => user.gender === gender)

  return res.send(usersFiltered)
})

app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId)

  const includeId = req.query.includeId === 'true'

  console.log(includeId, typeof includeId)

  const user = users.find(user => user.id === userId)

  if (!user) {
    return res.send({})
  }

  const userCopy = {...user}

  if (!includeId) {
    delete userCopy.id
  }

  return res.send(userCopy)
})

app.listen(8080, () => {
  console.log('Servidor express escuchando en el puerto 8080')
})