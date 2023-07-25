const socket = io()

console.log(socket)

const formButton = document.getElementById('formButton')
const nameInput = document.getElementById('nameInput')
const priceInput = document.getElementById('priceInput')


formButton.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = nameInput.value
  const price = priceInput.value

  console.log({ name, price })

  // socket.emit('enviarNuevoProducto', JSON.stringify({ name, price }))

  fetch(`/api/products`, {
    method: 'POST',
    body: { name, price }
  })
})

const deleteProduct = (id) => {
  // socket.emit('borrarProducto', id)

  fetch(`/api/products/${id}`, {
    method: 'DELETE',
  })
}

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

  table.innerHTML += productHTML
})