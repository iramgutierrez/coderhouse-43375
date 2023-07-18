const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())

app.set('views', './views')

app.set('view engine', 'handlebars')

app.use(express.static('public'))

const PORT = 8080

const httpServer = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

const socketServer = new Server(httpServer)

const products = [
  {
    id: 1,
    name: 'Coca cola',
    price: 10
  },
  {
    id: 2,
    name: 'Cafe',
    price: 20
  },
  {
    id: 3,
    name: 'Hamburguesa',
    price: 30
  },
  {
    id: 4,
    name: 'Tacos',
    price: 10
  },
]

socketServer.on('connection', (socket) => {
  console.log('Nuevo cliente conectado!')

  socket.on('mi_mensaje', (data) => {
    console.log(data)
  })

  setTimeout(() => {
    socket.emit('mensaje_backend', 'Mensaje enviado desde el backend')
  }, 2000)

  socket.on('enviarNuevoProducto', (data) => {
    console.log(data)

    const product = JSON.parse(data)

    product.id = products.length + 1

    console.log(product)

    products.push(product)

    socketServer.emit('nuevoProducto', JSON.stringify(product))
  })

  socket.on('borrarProducto', id => {
    console.log(id, 'borrar producto')
  })

})

app.get('/', (req, res) => {
  return res.json({
    status: 'running',
    date: new Date()
  })
})

app.get('/websockets', (req, res) => {
  return res.render('websockets')
})

app.get('/products', (req, res) => {
  const params = {
    title: 'Productos',
    products
  }
  return res.render('products', params)
})

app.post('/products/delete', (req, res) => {
  const data = req.body
  const productId = data.id

  const productIndex = products.findIndex(product => product.id === productId)

  products.splice(productIndex, 1)

  return res.redirect('/products')
})

app.get('/api/products', (req, res) => {
  return res.json(products)
})

app.post('/api/products', (req, res) => {
  const product = req.body
  product.id = products.length + 1

  products.push(product)

  socketServer.emit('nuevoProducto', JSON.stringify(product))

  return res.redirect('/products')
  //return res.status(201).json(product)
})

app.delete('/api/products/:id', (req, res) => {
  const productId = Number(req.params.id)

  const productIndex = products.findIndex(product => product.id === productId)

  products.splice(productIndex, 1)

  console.log('producto borrado')

  return res.status(204).json({})
})