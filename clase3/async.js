const escribeArchivoFake = (callback) => {
  setTimeout(() => {
    console.log('Simulando escribir en el archivo...')

    callback(null, "mywebsite.com/statics/file.pdf")
  }, 1000)
}

const escribeBDFake = (ruta, callback) => {
  setTimeout(() => {
    console.log('Simulando escribir en una base de datos...')

    callback(null, 100)
  }, 1000)
}

console.log('Inicio mi programa')

escribeArchivoFake((err, ruta) => {
  if (err !== null) {
    console.log(`Ocurrio un error: ${err}`)

    return 
  }

  escribeBDFake(ruta, (err, idBD) => {
    if (err !== null) {
      console.log(`Ocurrio un error: ${err}`)
  
      return 
    }
    console.log('Termino mi programa')
  })
})

console.log('adios')