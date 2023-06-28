const express = require('express');

const app = express();

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <h1 style="color:blue">Hola, bienvenidos!</h1>
</body>
</html>
`
const objeto = {
    nombre: 'ronaldo',
    deporte: 'futbol'
}

app.get('/bienvenida', (req, res) => {
    res.send(template)
});

app.get('/usuario', (req, res) => {
    res.send(objeto);
});



app.listen(8080, () => {
    console.log('servidor listo y corriendo en el puerto 8080')
})