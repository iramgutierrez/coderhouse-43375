const { Schema, model } = require('mongoose')

const userSchema = Schema({
  name: String,
  lastname: String,
  username: {
    type: String,
    unique: true
  },
  createdAt: Date
})

module.exports = model('users', userSchema)