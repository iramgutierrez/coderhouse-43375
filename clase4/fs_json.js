const fs = require('fs')

const productos = [
  {
    "id": 1,
    "title": "Producto 1",
    "description": "Desc prod1",
    "price": 10.2,
    "thumbnail": "www.image.com",
    "code": "qwerty",
    "stock": 100
  },
  {
    "id": 1,
    "title": "Producto 1",
    "description": "Desc prod1",
    "price": 10.2,
    "thumbnail": "www.image.com",
    "code": "qwerty",
    "stock": 100
  }
]

//const productosString = JSON.stringify(productos)

const exists = fs.existsSync('./productos.json')

// const productosString = '[{"id":1,"title":"Producto 1","description":"Desc prod1","price":10.2,"thumbnail":"www.image.com","code":"qwerty","stock":100},{"id":1,"title":"Producto 1","description":"Desc prod1","price":10.2,"thumbnail":"www.image.com","code":"qwerty","stock":100}]'

fs.promises.readFile('./productos.json', 'utf-8')
  .then((productosString) => {
    let products = []
    
    try {
      products = JSON.parse(productosString)
    } catch (e) {
      console.log('Error al leer el archivo, se asigna una arreglo vacio a productos')
    }
    
    // const products = JSON.parse(productosString)
    
    console.log({ products })

  })


/*fs.promises.writeFile('./productos.json', productosString)
  .then(() => {
    return fs.promises.readFile('./productos.json', 'utf-8')
  })
  .then((productosArchivo) => {
    console.log(typeof productosArchivo)
    const productosObjeto = JSON.parse(productosArchivo)
    console.log(productosObjeto)
  })
  .catch((e) => {
    console.log({ e })
  })*/

