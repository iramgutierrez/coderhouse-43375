class TicketManager {
  #precioBaseDeGanancia =  0.15
  constructor () {
    this.eventos = []
  }

  getEventos () {
    return this.eventos
  }

  agregarEvento (data) {
    // VALIDACIONES

    if (!data.nombre || typeof data.nombre !== 'string'
      || !data.lugar || !data.precio) {
      const error = 'Error: Existen errores en los campos.'
      console.log(error)
      return error
    }

    // 
    const nuevoEvento = {
      id: this.eventos.length + 1,
      participantes: [],
      nombre: data.nombre,
      lugar: data.lugar,
      precio: data.precio + this.#precioBaseDeGanancia,
      capacidad: data.capacidad ?? 50,
      fecha: data.fecha ? new Date(data.fecha) : new Date()
    }

    this.eventos.push(nuevoEvento)  
  }

  agregarUsuario (idEvento, idUsuario) {
    const evento = this.eventos.find(evento => evento.id === idEvento)

    if (!evento) {
      console.log("Error: El evento no existe")
      return 
    }

    const existeParticipante = evento.participantes.findIndex(participante => participante === idUsuario)

    if(existeParticipante !== -1) {
      console.log("Error: El usuario ya esta registrado en el evento")
      return
    }

    evento.participantes.push(idUsuario)
  }

  ponerEventoEnGira (idEvento, nuevoLugar, nuevaFecha) {
    const eventoPrevio = this.eventos.find(evento => evento.id === idEvento)

    const { lugar, fecha, id, participantes, ...otrosCampos } = eventoPrevio

    const nuevosCampos = {
      id: this.eventos.length + 1,
      participantes: [],
      lugar: nuevoLugar,
      fecha: nuevaFecha
    }

    const nuevoEvento = { ...otrosCampos, ...nuevosCampos }

    this.eventos.push(nuevoEvento)
  }
}

const manager = new TicketManager()

console.log(manager.getEventos())

const evento1 = {
  nombre: "Nombre de evento 1",
  lugar: "CDMX",
  precio: 1.30
}

manager.agregarEvento(evento1)

console.log(manager.getEventos())


const evento2 = {
  nombre: 'Evento 2',
  lugar: 'Buenos Aires',
  precio: 1.40,
  capacidad: 20
}

manager.agregarEvento(evento2)

console.log(manager.getEventos())

manager.agregarUsuario(1, 1)

manager.agregarUsuario(2, 1)

console.log(manager.getEventos())

manager.agregarUsuario(2, 1)

manager.ponerEventoEnGira(2, 'Lima', new Date('2023-12-31'))

console.log(manager.getEventos())


