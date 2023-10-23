const { Schema, model } = require('mongoose')

const userSchema = Schema({
  name: String,
  lastname: String,
  email: String,
  age: Number
})


module.exports = model('users', userSchema)