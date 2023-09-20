class ProductRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async get() {
        return this.dao.get();
    }
}

module.exports = ProductRepository;
