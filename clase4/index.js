const obj = {
  name: 'Carlos'
}

const obj2 = {
  name: 'Iram'
}

console.log({ obj, obj2 })

const timer = setInterval(() => {
  console.log('Hola')
}, 1000)


setTimeout(() => {
  clearInterval(timer)
}, 8000)

const now = new Date()

console.log(now.toUTCString())