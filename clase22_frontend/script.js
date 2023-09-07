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
  // fetch('http://localexample.com:8080/login', {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log(res.headers.get('Set-Cookie')); // undefined
          console.log(document.cookie); // nope
    return res.json()
  })
    .then(data => {
      
      console.log(data)
      // localStorage.setItem('authToken', data.access_token)
    })
})

getProfile.addEventListener('click', (e) => {
  e.preventDefault()

  fetch('http://localhost:8080/profile', {
  // fetch('http://localexample.com:8080/profile', {
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    credentials: 'include',
    method: 'GET',
  })
  .then(result => result.json())
  .then(data => console.log(data))
})

