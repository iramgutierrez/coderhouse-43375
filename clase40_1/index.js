const calculadora = (a, b, operacion) => {
  let resultado = 0

  switch (operacion) {
    case 'suma':
      resultado = a + b
      break
    case 'resta':
      resultado = a - b
      break
    case 'multiplicacion':
      resultado = a * b
      break
    case 'division':
      resultado = a / b
      break
    default:
      throw new Error('La operación no esta soportada')

  }
  return resultado
}

module.exports = { calculadora }