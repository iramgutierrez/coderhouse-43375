const express = require('express')
const handlebars = require('express-handlebars')

const viewsRouter = require('./routers/viewsRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())

app.set('views', './views')

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/', viewsRouter)

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

const pets = []

app.post('/api/pets', (req, res) => {
 const pet = req.body

 pets.push(pet)

 return res.redirect('/pets')
})

app.get('/api/pets', (req, res) => {
  return res.json(pets)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor express corriendo en el puerto ${PORT}`))