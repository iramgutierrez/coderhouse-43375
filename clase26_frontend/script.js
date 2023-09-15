
const button = document.getElementById('button')

button.addEventListener('click', e => {
  e.preventDefault()

  console.log('Click!!!')

  fetch('http://localhost:8080/api/toys', {
    method: 'GET'
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error))
})