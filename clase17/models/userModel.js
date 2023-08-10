const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const userSchema = Schema({
  userId: String,
  username: String,
  email: String,
  avatar: String,
  password: String,
  birthdate: Date,
  registeredAt: Date
})

userSchema.plugin(mongoosePaginate)

module.exports = model('users', userSchema)