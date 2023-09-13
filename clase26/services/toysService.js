const ToysStorage = require('../storage/toysMemory')

class ToysService {
  constructor () {
    this.storage = new ToysStorage()
  }

  getAll () {
    return this.storage.getAll()
  }

  get (id) {
    return this.storage.get(id)
  }

  create (body) {
    return this.storage.create(body)
  }

  update (id, body) {
    return this.storage.update(id, body)
  }

  delete (id) {
    return this.storage.delete(id)
  }
}

module.exports = ToysService