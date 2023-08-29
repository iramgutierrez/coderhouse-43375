const GitHubStrategy = require('passport-github2')

const userModel = require('../models/userModel')
const { generateToken } = require('../utils/jwt')


const gitHubStrategy = new GitHubStrategy({
  clientID: 'Iv1.af2eb976a7d59971',
  clientSecret: 'bbecab344174b6c6de466a5014aa0efd7f115db5',
  callbackURL: 'http://localhost:8080/api/sessions/github-callback'
}, async (accessToken, refreshToken, profile, done) => {
  // console.log({ accessToken, refreshToken, profile })

  try {
    let user = await userModel.findOne({ username: profile._json.login })

    if (user) {
      console.log('Usuario ya existe')
      const token = generateToken(user)

      user = user.toObject()
      user.access_token = token
      console.log({ user })
      return done(null, user)
    }
    
    const newUser = await userModel.create({
      username: profile._json.login,
      name: profile._json.name
    })

    const token = generateToken(newUser)
    console.log({ token })
    return done(null, {
      ...newUser,
      access_token: token
    })
  } catch (e) {
    return done(e)
  }
})

module.exports = gitHubStrategy