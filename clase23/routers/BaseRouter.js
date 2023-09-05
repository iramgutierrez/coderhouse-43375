const { Router } = require('express')

class BaseRouter {
  constructor () {
    this.router = Router()
    this.init()
  }

  getRouter () {
    return this.router
  }

  init () {}

  get(path, policies, ...callbacks) {
    this.router.get(path, this.generateCustomResponses(), this.handlePolicies(policies), this.applyCallbacks(callbacks))
  }

  post(path, ...callbacks) {
    this.router.post(path, this.applyCallbacks(callbacks))
  }

  applyCallbacks (callbacks) {
    return callbacks.map(callback => (...params) => {
      callback.apply(this, params)
    })
  }

  generateCustomResponses () {
    return (req, res, next) => {

      res.sendSuccess = payload => res.json(payload)
      res.sendServerError = (error, status) => res.status(status).json({ status: 'error', error })
      res.sendUserError = (error, status) => res.status(status).json({ error })
      return next()
    }
  }

  handlePolicies (policies) {
    return (req, res, next) => {
      if (policies.includes('PUBLIC')) {
        return next()
      }

      const role = req.headers.role

      console.log({ role, policies })

      if (policies.includes(role)) {
        return next()
      }

      return res.sendUserError('NO TIENES PERMISOS', 403)
    }
  }
}

module.exports = BaseRouter