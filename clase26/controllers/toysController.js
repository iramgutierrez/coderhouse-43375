const ToysService = require('../services/toysService')

class ToysController {
  constructor () {
    this.service = new ToysService()
  }

  getAll (req, res) {
    console.log(this)
    const toys = this.service.getAll()

    console.log(toys)

    return res.json(toys)
  }
 
  get (req, res) {
    const { id } = req.params

    const toy = this.service.get(id)

    if (!toy) {
      return res.status(404).json({
        error: 'Juguete no encontrado'
      })
    }

    return res.json(toy)
  }

  create (req, res) {
    const { body } = req
    // const body = req.body

    const newToy = this.service.create(body)

    
    if (!newToy) {
      return res.status(500).json({
        error: 'No se pudo crear el juguete'
      })
    }

    return res.status(201).json(newToy)
  }

  update (req, res) {
    const { id } = req.params
    const { body } = req

    const updatedToy = this.service.update(id, body)

    if (!updatedToy) {
      return res.status(500).json({
        error: 'No se pudo actualizar el juguete'
      })
    }

    return res.json(updatedToy)
  }

  delete (req, res) {
    const { id } = req.params

    const deletedToy = this.service.delete(id)

    if (!deletedToy) {
      return res.status(500).json({
        error: 'No se pudo borrar el juguete'
      })
    }
    
    return res.status(204).json({})
  }
 }

module.exports = ToysController