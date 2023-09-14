const UsersService = require("../services/usersService")
const { verifyToken } = require("../utils/jwt")

class UserMiddleware {
  constructor () {
    this.service = new UsersService()
  }

  async isAuth (req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({
        error: 'Necesitas autenticarte'
      })
    }

    const token = authHeader.replace('Bearer ', '')

    let payload

    try {
      payload = await verifyToken(token)
    } catch (e) {
      return res.status(401).json({
        error: e.message
      })
    }

    const user = this.service.get(payload.userId)

    if (!user) {
      return res.status(401).json({
        error: 'Token invalido'
      })
    }

    req.user = user

    return next()
  }

  hasRole (...roles) {
    console.log(roles)
    return (req, res, next) => {
      const isValidRole = roles.includes(req.user.role)
      
      if (!isValidRole) {
        return res.status(403).json({
          error: 'No tienes permiso para realizar esta acción'
        })
      }
      return next()
    }
  }

}

module.exports = UserMiddleware