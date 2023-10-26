const cluster = require('cluster')
const { cpus } = require('os')

const express = require('express')

if (cluster.isPrimary) {
  console.log('Proceso primario', process.pid)
  console.log('Este proceso solo se encargara de levantar los procesos secundarios')

  for (let i = 0; i < cpus().length; i++) {
    cluster.fork()
  }

  cluster.on('message', worker => {
    `Mensaje recibido desde el worker: ${worker.process.pid}`
  })
} else {
  console.log('Proceso secundario', process.pid)
  console.log('Este es el proceso que tiene que ejecutar todas las tareas')

  const app = express()

  app.get('/', (req, res) => {
    return res.json({
      status: 'running',
      date: new Date(),
      pid: process.pid
    })
  })

app.get('/operacionsencilla', (req,res)=>{
  let sum = 0
  for (let i=0; i<1000000; i++){
      sum +=i
  }
  res.send({sum});
})

app.get('/operacioncompleja', (req,res)=>{
    let sum = 0
    for (let i=0; i<5e8; i++){
        sum +=i
    }
    res.send({sum});
})

  const PORT = 8080

  app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
}
