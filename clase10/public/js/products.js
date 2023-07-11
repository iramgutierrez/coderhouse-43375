const socket = io()

console.log(socket)

socket.on('nuevoProducto', (data) => {
  const product = JSON.parse(data)

  const productHTML = `
  <tr>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
  </tr>
  `

  const table = document.getElementById('productos')

  table.append(productHTML)

})