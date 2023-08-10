const express = require('express')
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const userModel = require('./models/userModel')



const app = express()

// Configuración handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase16-test?retryWrites=true&w=majority'

;(async () => {
  await mongoose.connect(MONGODB_CONNECT)

  app.get('/', (req, res) => {
    return res.json({
      status: 'running',
      date: new Date()
    })
  })

  app.get('/students', async (req, res) => {
    const page = req.query.page || 1
    const limit = req.query.limit || 10

    const params = { limit, page }

    if (req.params.sort) {
      params.sort = { username: 1 }
    }

    const users = await userModel.paginate({ }, params)
    console.log(users)

    users.docs = users.docs.map(user => user.toObject())

    return res.render('students', users)
  })

  const PORT = 8080

  app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
})()