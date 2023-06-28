const express = require('express')
const UserManager = require('./UserManager')

const manager = new UserManager('./users.json')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = [
  {
    id: 1,
    name: 'Iram',
    lastname: 'Gutiérrez',
    gender: 'M',
    deleted: false
  },
  {
    id: 2,
    name: 'Fatima',
    lastname: 'Melgarejo',
    gender: 'F',
    deleted: false
  },
  {
    id: 3,
    name: 'Nicolas',
    lastname: 'Aquino',
    gender: 'M',
    deleted: false
  },
  {
    id: 4,
    name: 'Francisco',
    lastname: 'Fariña',
    gender: 'M',
    deleted: false
  },
]

app.get('/users', async (req, res) => {
  const users = await manager.getUsers()
  console.log({ users })
  const gender = req.query.gender

  if (!gender) {
    return res.send(users)
  }

  const usersFiltered = users.filter(user => user.gender === gender)

  return res.send(usersFiltered)
})

app.get('/users/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId)

  //const includeId = req.query.includeId === 'true'

  //console.log(includeId, typeof includeId)

  //const user = users.find(user => user.id === userId)

  const user = await manager.getUserById(userId)

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    })
  }

  // const userCopy = {...user}

  /*if (!includeId) {
    delete userCopy.id
  }*/

  return res.send(user)
})

app.post('/users', (req, res) => {
  const user = req.body

  user.id = users.length + 1

  users.push(user)

  return res.status(201).json(user)
})

app.put('/users/:userId', (req, res) => {
  const data = req.body

  const userId = parseInt(req.params.userId)

  const user = users.find(user => user.id === userId)

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    })
  }

  user.name = data.name || user.name
  user.lastname = data.lastname || user.lastname
  user.gender = data.gender || user.gender

  return res.json(user)
})

app.delete('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId)

  const userIndex = users.findIndex(user => user.id === userId)

  console.log({ userIndex, userId })

  if (userIndex === -1) {
    return res.status(404).json({
      error: 'User not found'
    })
  }

  users.splice(userIndex, 1)

  return res.status(204).json({})
})

app.listen(8080, () => {
  console.log('Servidor express escuchando en el puerto 8080')
})