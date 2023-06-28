const http = require('http')

const server = http.createServer((request, response) => {
  console.log('Solicitud recibida', request.url)

  if (request.url === '/contacto') {
    response.end('Bienvenido a la sección de contacto')
  } else if (request.url === '/sucursales') {
    response.end('Bienvenido a la sección de sucurales')
  } else if (request.url === '/proveedores') {
    response.end('Bienvenido a la sección de proveedores')
  } else if (request.url === '/') {
    response.end('Bienvenido a la sección de home')
  }
  
})

server.listen(8080, () => {
  console.log('Servidor web escuchando en el puerto 8080')
})

