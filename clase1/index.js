var nulo = null

console.log(nulo)

// scope 0 (padre)
let bar = 1

if (true) {
  // scope 1 (hijo)
  let bar = 2
}

console.log(bar)

const foo = 3

//foo = 4

console.log(foo)

const user = {
  name: 'Iram',
  lastname: 'Gutiérrez'
}

const user2 = user

user2.name = 'Diego'


// console.log({ foo, user, user2 })

let x = 12

let y = x

x = 13

//console.log({ x, y })


/*function suma (a, b) {
  return a + b
}*/

/*const suma = function (a, b) {
  return a + b
}*/

/*const suma = (a, b) => {
  return a + b
}*/

const suma = (a, b) => a + b

const resultado = suma (12, 13)


const duplicate = num => num*2

const duplicado = duplicate(2)

console.log({ resultado, duplicado })

const nombre = 'Iram'

const comision = 43375

let saludo = 'Hola, soy ' + nombre + '. \nBienvenidos a la comisión ' + comision

saludo = `Hola, soy ${nombre}. 
  Bienvenidos a la comisión ${comision}`

console.log(saludo)

const arreglo = []

console.log(arreglo.length)




