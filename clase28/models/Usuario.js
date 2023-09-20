const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    contraseña: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaUltimoAcceso: {
        type: Date
    },
    rol: {
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario'
    }
});

// Si quieres añadir métodos o funcionalidades adicionales, este es un buen lugar. Por ejemplo:
// usuarioSchema.methods.algunMetodo = function() { ... };

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
