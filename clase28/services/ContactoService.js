const ContactoDAO = require('../dao/ContactoDAOMongo'); // Para MongoDB
// const ContactoDAO = require('../dao/ContactoDAOEnMemoria'); // Para Memoria

class ContactoService {
    constructor() {
        this.contactoDAO = new ContactoDAO();
    }

    async listarContactos() {
        return await this.contactoDAO.obtenerTodos();
    }

    // ... Otros métodos del negocio.
}

module.exports = ContactoService;
