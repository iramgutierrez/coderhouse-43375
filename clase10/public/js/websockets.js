const socket = io()

console.log(socket)

socket.emit('mi_mensaje', 'Primer mensaje enviado desde el cliente')

socket.on('mensaje_backend', (data) => {
  console.log(data)
})