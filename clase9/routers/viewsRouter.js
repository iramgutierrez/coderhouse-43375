const { Router } = require('express')

const viewsRouter = Router()

viewsRouter.get('/home', (req, res) => {
  const params = {
    title: 'Home',
    nombre: 'Iram',
    style: 'home.css'
  }
  return res.render('index', params)
})

const users = [
  {
      name: 'Santiago',
      lastname: 'Apellido',
      age: 2,
      email: 'santiago@gmail.com',
      phone: '12345678',
      role: 'admin'
  },
  {
      name: 'Ferer',
      lastname: 'Apellido',
      age: 2,
      email: 'santiago@gmail.com',
      phone: '12345678',
      role: 'admin'
  },
  {
      name: 'aa',
      lastname: 'Apellido',
      age: 2,
      email: 'santiago@gmail.com',
      phone: '12345678',
      role: 'user'
  },
  {
      name: 'ddd',
      lastname: 'Apellido',
      age: 2,
      email: 'ddd@gmail.com',
      phone: '12345678',
      role: 'user'
  },
  {
      name: 'Saqw22ntiago',
      lastname: 'Apellido',
      age: 2,
      email: 'santiago@gmail.com',
      phone: '12345678',
      role: 'admin'
  }

]

const food = [
  {
    name: 'Hamburguesa',
    price: 100
  },
  {
    name: 'Tacos',
    price: 40
  },
  {
    name: 'Coca Cola',
    price: 70
  },
  {
    name: 'Agua',
    price: 200
  },
  {
    name: 'Papas',
    price: 20
  }
]

viewsRouter.get('/user', (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const selectedUser = users[randomIndex];

  const params = {
      title: 'User',
      name: selectedUser.name,
      lastname: selectedUser.lastname,
      age: selectedUser.age,
      email: selectedUser.email,
      phone: selectedUser.phone,
      food,
      role: selectedUser.role,
      isAdmin: selectedUser.role === 'admin',
      style: 'user.css'
  }
  return res.render('user', params)
})

viewsRouter.get('/pets', (req, res) => {
  return res.render('register')
})

module.exports = viewsRouter