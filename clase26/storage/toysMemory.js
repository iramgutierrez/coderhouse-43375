class ToysMemory {
  constructor () {
    this.toys = []
  }

  getAll () {
    return this.toys
  }

  get (id) {
    const toy = this.toys.find(toy => toy.id === Number(id))

    return toy
  }

  create (toy) {
    
    toy.id = this.toys.length + 1

    this.toys.push(toy)

    return toy
  }

  update (id, body) {
    let toy = this.toys.find(toy => toy.id === Number(id))

    if (!toy) {
      return false
    }

    toy = {...toy, ...body}

    return toy
  }

  delete (id) {

    let toyIndex = this.toys.findIndex(toy => toy.id === Number(id))

    if (toyIndex === -1) {
      return false
    }

    this.toys = this.toys.slice(toyIndex, 1)

    return true
  }

}

module.exports = ToysMemory