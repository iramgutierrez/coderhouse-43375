const express = require('express')

const toysRouter = require('./routers/toysRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

app.use('/api/toys', toysRouter)

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

