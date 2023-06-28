const fs = require('fs')

const contenido = 'Primer contenido para escribir en un archivo con promesas'

const archivo = './archivo_callbacks_.txt'

const init = async () => {
  try {
    const resultado = await fs.promises.readFile(archivo, 'utf-8')  

    console.log({ resultado })
  } catch (e) {
    console.log('Ocurrio un error!')
  }
    
}

init()

