const { calculadora } = require('./index')

// test 1

const a1 = 1
const b1 = 2
const operacion1 = 'suma'
const resultadoEsperado1 = 3

const resultado1 = calculadora(a1, b1, operacion1)

if (resultadoEsperado1 === resultado1) {
  console.log('Test exitoso!')
} else {
  console.error('Test fallido')
}

const a2 = 10
const b2 = 3
const operacion2 = 'residuo'
const resultadoEsperado2 = 'La operación no esta soportada'
let resultado2

try {
  resultado2 = calculadora(a2, b2, operacion2)
} catch (e) {
  resultado2 = e
}

if (resultado2 instanceof Error && resultado2.message === resultadoEsperado2) {
  console.log('Test exitoso!')
} else {
  console.error('Test fallido')
}