const passport = require('passport')
const GitHubStrategy = require('passport-github2')

const userModel = require('../models/userModel')

const initializePassport = () => {
  passport.use('github', new GitHubStrategy({
    clientID: 'Iv1.af2eb976a7d59971',
    clientSecret: 'bbecab344174b6c6de466a5014aa0efd7f115db5',
    callbackURL: 'http://localhost:8080/api/sessions/github-callback'
  }, async (accessToken, refreshToken, profile, done) => {
    // console.log({ accessToken, refreshToken, profile })

    try {
      const user = await userModel.findOne({ username: profile._json.login })
  
      if (user) {
        console.log('Usuario ya existe')
        return done(null, user)
      }
      
      const newUser = await userModel.create({
        username: profile._json.login,
        name: profile._json.name
      })

      return done(null, newUser)
    } catch (e) {
      return done(e)
    }
  }))

  passport.serializeUser((user, done) => {
    console.log({ user })
    console.log('serializeUser')
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    console.log('deserializeUser')
    const user = await userModel.findOne({ _id: id})
    done(null, user)
  })

}

module.exports = initializePassport