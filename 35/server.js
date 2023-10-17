const express = require('express')
const cluster = require('cluster')
const { cpus } = require('os')

if (cluster.isPrimary) {
  console.log('primary', process.pid)

  //for (i = 0; i < cpus().length; i++) {
    cluster.fork()
  //}
  
} else {
  console.log('secundary', process.pid)
  const app = express()

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

  
  app.listen(8080, () => console.log(`Servidor corriendo en el puerto 8080`))

}
