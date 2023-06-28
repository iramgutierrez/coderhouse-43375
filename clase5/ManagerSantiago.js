const fs = require('fs')

class ProductManager {
    constructor(path) {
        this.products = [];
        this.path = path;
    }

    async getProducts() {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            this.products = JSON.parse(data)
            console.log(this.products)

            return this.products
        } catch (error) {
            console.log('Error al leer el archivo', { error })

            this.products = []

            return []
        }
    }

    async createFile() {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2))
            console.log(`El archivo ${this.path} fue creado correctamente`)
        } catch (error) {
            console.log('Error al crear el archivo', { error })
        }
    }

    async addProduct(data) {
        const newProduct = {
            id: this.products.length + 1,
            code: data.code,
            title: data.title,
            description: data.description,
            price: data.price,
            thumbnail: data.thumbnail,
            stock: data.stock ?? 1
        }

        await this.getProducts()

        if (!data.title || !data.description || !data.price || !data.thumbnail || !data.code) {
            //stock queda fuera para permitir la carga del valor cero
            console.log('Todos los campos son obligatorios')
            return
        }

        const exist = this.products.find((product) => product.code === data.code);
        if (exist) {
            console.log(`Ya existe un producto con el código ${data.code}`)
            return;
        }

        this.products.push(newProduct);
        await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2))
        console.log(`Se agregó el producto "${data.title}" correctamente`);
    }

/*     getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        product ? console.log(product) : console.log("Not Found");
    } */
}

const productManager = new ProductManager('./products.json');
productManager.createFile()
productManager.getProducts()