const mongoose = require('mongoose');

const ContactoSchema = new mongoose.Schema({
    nombre: String,
    telefono: String
});

module.exports = mongoose.model('Contacto', ContactoSchema);
