const fs = require('fs')

const contenido = 'Primer contenido para escribir en un archivo con callbacks'

const archivo = './archivo_callbacks.txt'

fs.writeFile(archivo, contenido, (err) => {
  if (err !== null) {
    console.log(err)
    return err
  }

  fs.readFile(archivo, 'utf-8', (err, contenidoArchivo) => {
    if (err !== null) {
      console.log(err)
      return err
    }

    console.log({ contenidoArchivo })

    const nuevoContenido = `
Contenido adicional para guardar en el archivo`

    fs.appendFile(archivo, nuevoContenido, (err) => {
      if (err !== null) {
        console.log(err)
        return err
      }

      fs.unlink(archivo, (err) => {
        if (err !== null) {
          console.log(err)
          return err
        }
      })
    })
  })
})


