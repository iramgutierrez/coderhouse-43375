const mongoose = require('mongoose');
const Usuario = require('../models/Usuario'); // Asumiendo que tienes un modelo llamado Usuario

class UsuarioDAO {
    async create(usuarioData) {
        const usuario = new Usuario(usuarioData);
        return await usuario.save();
    }

    async get(id) {
        return await Usuario.findById(id);
    }

    async getAll() {
        return await Usuario.find();
    }

    // ... otros métodos (update, delete, etc.)
}

module.exports = UsuarioDAO;
