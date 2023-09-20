const ProductDAO = require('../dao/productDAO');
const ProductRepository = require('../repository/productRepository');

const productDAO = new ProductDAO();
const productRepository = new ProductRepository(productDAO);

module.exports = {
    productRepository
};
