const ContactoDAO = require('./ContactoDAO');

class ContactoDAOEnMemoria extends ContactoDAO {
    constructor() {
        super();
        this.contactos = [];
        this.idActual = 1;
    }

    async obtenerTodos() {
        return [...this.contactos];
    }

    async obtenerPorId(id) {
        return this.contactos.find(contacto => contacto.id === id) || null;
    }

    async agregar(contacto) {
        contacto.id = this.idActual++;
        this.contactos.push(contacto);
        return contacto;
    }

    async actualizar(id, contactoActualizado) {
        const index = this.contactos.findIndex(contacto => contacto.id === id);
        this.contactos[index] = { ...contactoActualizado, id };
        return this.contactos[index];
    }

    async borrar(id) {
        const index = this.contactos.findIndex(contacto => contacto.id === id);
        this.contactos.splice(index, 1);
    }
}

module.exports = ContactoDAOEnMemoria;
