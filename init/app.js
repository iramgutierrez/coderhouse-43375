const express = require('express')
const cors = require('cors')
const paymentRouter = require('./routers/payments.router')

const app = express()

app.use(cors())
app.use('/api/payments', paymentRouter)

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))