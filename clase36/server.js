const express = require('express')
const mongoose = require('mongoose')

const userModel = require('./userModel')

const MONGODB_CONNECT = process.env.MONGO_URL || 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase21?retryWrites=true&w=majority'
mongoose.connect(MONGODB_CONNECT)
.then(()=>console.log('conexion DB'))
.catch((error) => console.log(error))

const app = express()

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date(),
    pid: process.pid
  })
})

app.get('/users', (req, res) => {
  return userModel.find()
    .then(users => {
      return res.json(users)
    })
})



const PORT = 8081

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

/* 
Duda sobre como utilizar el req.logger fuera del contexto de router de express
(() => {
  class Manager {
    constructor(logger) {
      this.logger = logger
    }

    setLogger (logger) {
      this.logger = logger
    }
  
    async create(data) {
      const newUser = await userModel.create(data)
      this.logger.log('usuario creado')
      return newUser
    }
  }

  const manager = new Manager()
  
  app.post('/users', (req, res) => {
    const body = req.body

    manager.setLogger(req.logger)
  
    // const manager = new Manager(req.logger)
  
    const newUser = manager.create(body)
  })
})() */