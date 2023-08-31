console.log('Hola')

const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const sendButton = document.getElementById('sendButton')
const getProfile = document.getElementById('profile')

console.log({ emailInput, passwordInput, sendButton })

sendButton.addEventListener('click', (e) => {
  e.preventDefault()
  const email = emailInput.value
  const password = passwordInput.value

  console.log({ email, password })

  fetch('http://localhost:8080/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(result => result.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('authToken', data.access_token)
    })
})

getProfile.addEventListener('click', (e) => {
  e.preventDefault()

  fetch('http://localhost:8080/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  })
  .then(result => result.json())
  .then(data => console.log(data))
})

