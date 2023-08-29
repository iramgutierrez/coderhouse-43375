const passportLocal = require('passport-local')

const LocalStrategy = passportLocal.Strategy


const loginLocalStrategy = new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      let user = await userModel.findOne({ email: email })

      if (!user) {
        console.log('El usuario no existe en el sistema')
        return done(null, false, { message: 'El usuario no existe en el sistema' })
      }

      if (!isValidPassword(password, user.password)) {
        // console.log('Datos incorrectos')
        return done(null, false, { message: 'Datos incorrectos' })
      }

      user = user.toObject()

      delete user.password

      done(null, user)
    } catch (e) {
      return done(e)
    }
  }
)

module.exports = loginLocalStrategy