class ProductManager {
  constructor (path) {
    this.products = []
    this.path = path
  }

  addProduct(data) {
    if (!data.title 
      || !data.description
      || !data.price
      || !data.thumbnail
      || !data.code
      || !data.stock) {
        return "Error: Campos incorrectos"
      }

      const productExists = this.products.findIndex((product) => product.code === data.code)

      if (productExists !== -1) {
        console.log("El código de producto ya esta en uso")
        return "Error: El código de producto ya esta en uso."
      }

      const product = {
        id: this.products.length + 1,
        title: data.title,
        description: data.description,
        price: data.price,
        thumbnail: data.thumbnail,
        code: data.code,
        stock: data.stock
      }

      this.products.push(product)

      return product
  }

  getProducts () {
    return this.products
  }

  getProductById (id) {
    const productExists = this.products.find((product) => product.id === id)

    if (!productExists) {
      const error = 'Not found'
      console.log(error)
      return error
    }

    return productExists
  }
}

const manager = new ProductManager('./products.json')

const body = {
  "title": "Producto 1",
  "description": "Desc prod1",
  "price": 10.2,
  "thumbnail": "www.image.com",
  "code": "qwerty",
  "stock": 100
}

manager.addProduct(body)

const body2 = {
  "title": "Producto 2",
  "description": "Desc prod2",
  "price": 10.2,
  "thumbnail": "www.image.com",
  "code": "qwerty2",
  "stock": 100
}

manager.addProduct(body2)

manager.addProduct(body)

console.log(manager.getProducts())

const product2 = manager.getProductById(2)
const product1 = manager.getProductById(1)
const product3 = manager.getProductById(3)

console.log({
  product1,
  product2,
  product3
})
