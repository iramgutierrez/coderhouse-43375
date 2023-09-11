//const operacionCompleja = () => {
process.on('message', message => {
  let result = 0

  for (let i= 0; i < message; i++) {
    result += i
  }

  process.send(result)
})