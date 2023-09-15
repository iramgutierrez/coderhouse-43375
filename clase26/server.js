const express = require('express')
const cors = require('cors')
const { Command } = require('commander')
const dotenv = require('dotenv')
const config = require('./utils/config')

const DB = require('./db/singleton')

const program = new Command()

program
  .option('--mode <mode>', 'Modo de trabajo', 'dev')

program.parse()

const options = program.opts()

dotenv.config({
  path: `.env.${options.mode}`
})

const settings = config()

const dbConnection = DB.getConnection(settings)

DB.getConnection(settings)

const toysRouter = require('./routers/toysRouter')

const app = express()

app.use(cors())

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

