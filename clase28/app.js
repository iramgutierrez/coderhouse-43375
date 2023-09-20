const express = require('express');
const mongoose = require('mongoose');
const contactsRouter = require('./routes/contacts'); // Asegúrate de tener este archivo y ruta.
const productRouter = require('./routes/productRouter'); // Asegúrate de tener este archivo y ruta.
const app = express();

// Conectar con MongoDB
const mongoURI = 'mongodb://localhost:27017/contactosDB'; // Cambia la URI si es necesario.
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Rutas
app.use('/contacts', contactsRouter);
app.use('/api', productRouter); 
// Iniciar el servidor
app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});

module.exports = app;
