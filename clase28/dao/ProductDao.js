class ProductoDAO{
    constructor(){
        this.productos = [];
    }

    async get(){
        return this.productos;
    }
}


module.exports = ProductoDAO;
