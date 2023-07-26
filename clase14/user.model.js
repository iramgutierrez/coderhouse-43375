const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  }
})

module.exports = mongoose.model('users', userSchema)
