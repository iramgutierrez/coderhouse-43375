import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerDocs from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express'

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import __dirname from './utils/index.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb://localhost:27017/clase39`)

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Documentación de adoptme',
      description: 'API para gestión de adopciones de mascotas'
    }
  },
  apis: [
    `./docs/**/*.yaml`
  ]
}

const specs = swaggerDocs(swaggerOptions)

app.use(express.json());
app.use(cookieParser());
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
