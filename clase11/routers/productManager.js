class ProductManager {
  constructor(path, io) {
    this.path = path
    this.io = io
  }

  addProduct() {
    this.io.emit('newProduct')
  }
}

module.exports = ProductManager