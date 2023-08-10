const mongoose = require('mongoose')
const orderModel = require('./models/orderModel')

const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase17-aggregation?retryWrites=true&w=majority'

;(async () => { // IIFE
  await mongoose.connect(MONGODB_CONNECT)

  /*await orderModel.insertMany([
    { name: 'Pepperoni', size: 'medium', price: 20, quantity: 10 },
    { name: 'Chesse', size: 'medium', price: 23, quantity: 20 },
    { name: 'Pepperoni', size: 'medium', price: 10, quantity: 15 },
    { name: 'Vegan', size: 'medium', price: 27, quantity: 12 },
    { name: 'Pepperoni', size: 'medium', price: 30, quantity: 20 },
    { name: 'Chesse', size: 'medium', price: 24, quantity: 22 },
    { name: 'Pepperoni', size: 'medium', price: 43, quantity: 1 },
    { name: 'Vegan', size: 'medium', price: 10, quantity: 22 },
    { name: 'Pepperoni', size: 'medium', price: 20, quantity: 10 },
    { name: 'Vegan', size: 'medium', price: 20, quantity: 10 },
    { name: 'Chesse', size: 'medium', price: 20, quantity: 3 },
    { name: 'Vegan', size: 'medium', price: 20, quantity: 10 },
    { name: 'Chesse', size: 'medium', price: 20, quantity: 5 },
    { name: 'Vegan', size: 'medium', price: 20, quantity: 10 },
    { name: 'Pepperoni', size: 'medium', price: 20, quantity: 8 },
    { name: 'Vegan', size: 'medium', price: 20, quantity: 10 },
    { name: 'Chesse', size: 'medium', price: 20, quantity: 11 },
    { name: 'Vegan', size: 'medium', price: 20, quantity: 10 },
    { name: 'Chesse', size: 'medium', price: 20, quantity: 21 }
  ])*/

  const orders = await orderModel.aggregate([
    {
      $match: { size: 'medium' }
    },
    {
      $group: {
        _id: '$name',
        totalQuantity: { $sum: '$quantity' },
        totalPrice: { $sum: '$price' }
      }
    },
    {
      $sort: { totalQuantity: -1 }
    },
    {
      $group: {
        _id: 1,
        orders: {
          $push: '$$ROOT'
        }
      }
    },
    {
      $project: {
        _id: 0,
        orders: '$orders'
      }
    }
  ])

  console.log(JSON.stringify(orders, null, 2))
})()

