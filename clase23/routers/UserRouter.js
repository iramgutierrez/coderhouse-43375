const BaseRouter = require("./BaseRouter");

class UserRouter extends BaseRouter {
  init () {
    this.get('/', ["ADMIN", "PREMIUM"], (req, res) => {
      return res.sendSuccess('Hola Coders')
    })
  }
}

module.exports = UserRouter