const fs = require('fs')

const contenido = 'Primer contenido para escribir en un archivo'

const archivo = './archivo_sync.txt'

fs.writeFileSync(archivo, contenido)

if (fs.existsSync(archivo)) {
  const contenidoArchivo = fs.readFileSync(archivo, 'utf-8')

  console.log({ contenidoArchivo })

  console.log(contenidoArchivo === contenido)

  const nuevoContenido = `
  Contenido adicional para guardar en el archivo`

  fs.appendFileSync(archivo, nuevoContenido)

  fs.unlinkSync(archivo)
} else {
  console.log('El archivo no existe')
}



