const express = require('express')
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
