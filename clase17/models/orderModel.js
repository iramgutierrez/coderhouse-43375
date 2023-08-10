const { Schema, model } = require('mongoose')

const orderSchema = Schema({
  name: String,
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium'
  },
  price: Number,
  quantity: Number,
  date: Date
})

module.exports = model('orders', orderSchema)