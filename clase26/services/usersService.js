const UsersStorage = require('../storage/usersMemory')
const { generateToken } = require('../utils/jwt')

const { createHash, isValidPassword } = require('../utils/passwordHash')

class UsersService {
  constructor () {
    this.storage = new UsersStorage()
  }

  getAll () {
    return this.storage.getAll()
  }

  get (id) {
    return this.storage.get(id)
  }

  create (body) {
    body.password = createHash(body.password)

    return this.storage.create(body)
  }

  update (id, body) {
    return this.storage.update(id, body)
  }

  delete (id) {
    return this.storage.delete(id)
  }

  login (email, password) {
    const user = this.storage.getByEmail(email)

    if (!user) {
      return false
    }

    if (!isValidPassword(password, user.password)) {
      return false
    }

    const token = generateToken({
      userId: user.id,
      role: user.role
    })

    delete user.password

    user.token = token

    return user
  }
}

module.exports = UsersService