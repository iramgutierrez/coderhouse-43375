const fs = require('fs')

const contenido = 'Primer contenido para escribir en un archivo con promesas'

const archivo = './archivo_promesas.txt'

fs.promises.writeFile(archivo, contenido)
  .then(() => {
    console.log('Archivo escrito corectamente')

    return fs.promises.readFile(archivo, 'utf-8')  
  })
  .then((contenidoArchivo) => {
    console.log({ contenidoArchivo })

    const nuevoContenido = `
Contenido adicional para guardar en el archivo`

    return fs.promises.appendFile(archivo, nuevoContenido)
  })
  .then(() => {
    console.log('Archivo actualizado correctamente')

    return fs.promises.unlink(archivo)
  })
  .catch((err) => {
    console.log({ err })
  })