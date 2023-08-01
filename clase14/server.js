const express = require('express')
const mongoose = require('mongoose')

const userModel = require('./user.model')

const app = express()

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase15?retryWrites=true&w=majority'

mongoose.connect(MONGODB_CONNECT)
  .catch(err => {
    if (err) {
      console.log('No se pudo conectar a la base de datos', err)
      process.exit()
    }
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

app.get('/api/users', async (req, res) => {
  const users = await userModel.find()

  return res.json(users)
})

app.get('/api/users/:id', async (req, res) => {
  const user = await userModel.findById(req.params.id)

  return res.json(user)
})

app.post('/api/users', async (req, res) => {
  const body = req.body

  try {
    const result = await userModel.create({
      name: body.name,
      lastname: body.lastname,
      email: body.email
    })
  
    return res.status(201).json(result)
  } catch (e) {
    return res.status(500).json(e)
  }
})

app.put('/api/users/:id', async (req, res) => {

  const user = await userModel.findById(req.params.id)

  const userUpdated = {
    _id: user._id,
    name: req.body.name || user.name,
    lastname: req.body.lastname || user.lastname,
    email: req.body.email || user.email
  }

  const result = await userModel.updateOne({ _id: req.params.id }, userUpdated)

  return res.json(userUpdated)
})

app.delete('/api/users/:id', async (req, res) => {

  try {
    const user = await userModel.findById(req.params.id)

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      })
    }
  } catch (e) {
    return res.status(404).json({
      error: 'User not found'
    })
  }

  const result = await userModel.deleteOne({ _id: req.params.id })

  return res.status(204).json({})
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))