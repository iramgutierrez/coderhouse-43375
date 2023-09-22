import express from "express";
import usersRouter from "./routes/users.router.js";
import businessRouter from "./routes/business.router.js";
import ordersRouter from "./routes/orders.router.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/clase29', { useNewUrlParser: true, useUnifiedTopology: true });

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://127.0.0.1:5500', methods: ['GET', 'POST', 'PUT', 'DELETE'] })); // <-- Mueve cors aquí

// Rutas
app.use('/api/users', usersRouter);        // También te recomendaría quitar el "Router" del path
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
