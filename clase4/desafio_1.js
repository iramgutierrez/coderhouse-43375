const fs = require('fs')

const archivo = './archivo_fechaHora.txt'
const horaFecha = new Date().toDateString()

fs.writeFile(archivo, horaFecha, (err) => {
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
  })
})