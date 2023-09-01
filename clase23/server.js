const express = require('express')
const dictionaryRouter = require('./routers/dictionaryRouter')

const app = express()

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

app.use('/api/dictionary', dictionaryRouter)

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))