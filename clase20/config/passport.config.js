const passport = require('passport')
const passportLocal = require('passport-local')
const userModel = require('../models/userModel')
const { createHash, isValidPassword } = require('../utils/passwordHash')

const LocalStrategy = passportLocal.Strategy

const initializePassport = () => {
  passport.use('register', new LocalStrategy(
    { passReqToCallback: true, usernameField: 'email' },
    async (req, username, password, done) => {
      try {
        const user = await userModel.findOne({ email: username })
  
        if (user) {
          console.log('Usuario ya existe')
          return done(null, false)
        }
  
        const body = req.body
        body.password = createHash(body.password)
        console.log({ body })
        
        const newUser = await userModel.create(body)
  
        return done(null, newUser)
      } catch (e) {
        return done(e)
      }
    }
  ))

  passport.use('login', new LocalStrategy(
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
  ))

  passport.serializeUser((user, done) => {
    console.log('serializeUser')
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    console.log('deserializeUser')
    const user = await userModel.findOne(id)
    done(null, user)
  })
}

module.exports = initializePassport

