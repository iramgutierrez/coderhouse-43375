const bcrypt = require('bcrypt')

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

const isValidPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
  createHash,
  isValidPassword
}