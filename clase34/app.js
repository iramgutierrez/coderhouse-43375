import  express  from 'express';
import { addLogger } from './src/utils/logger.js';

const app = express()

app.use(addLogger);

app.get('/', (req,res) =>{
    req.logger.warn("Alerta!Peligro el dolar esta arriba de 1k aiuda");
    res.send({message:"Prueba de logger"})

})

app.get('/operacionsencilla', (req,res)=>{
    let sum = 0
    for (let i=0; i<1000000; i++){
        sum +=i
    }
    res.send({sum});
})

app.get('/operacioncompleja', (req,res)=>{
    let sum = 0
    for (let i=0; i<5e8; i++){
        sum +=i
    }
    res.send({sum});
})

app.listen(8080, () => console.log("listening"))