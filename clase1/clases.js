class Persona {
  constructor(name) {
    // this.name = name
  }
}

const iram = new Persona('Iram')

console.log(iram)

class Contador {
  #nombre
  constructor (nombre) {
    this.#nombre = nombre
    this.contador = 0
  }

  static contadorGlobal = 0

  getResponsable () {
    return `El responsable es ${this.#nombre}`
  }

  contar () {
    this.contador = this.contador + 1
    Contador.contadorGlobal = Contador.contadorGlobal + 1
  }

  getCuentaIndiviual () {
    return this.contador
  }

  getCuentaGlobal () {
    return Contador.contadorGlobal
  }
}

const santiago = new Contador('Santiago')
const fatima = new Contador('Fatima')
const douglas = new Contador('Douglas')

console.log(santiago.getResponsable())

process.exit()

fatima.contar()
santiago.contar()
douglas.contar()

console.log(santiago.getCuentaIndiviual(), santiago.getCuentaGlobal())
console.log(fatima.getCuentaIndiviual(), fatima.getCuentaGlobal())
console.log(douglas.getCuentaIndiviual(), douglas.getCuentaGlobal())