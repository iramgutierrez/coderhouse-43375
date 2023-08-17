const { Schema, model } = require('mongoose')

const userSchema = Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  age: Number,
  password: String,
  createdAt: Date
})

module.exports = model('users', userSchema)