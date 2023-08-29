const passport = require('passport')
const GitHubStrategy = require('passport-github2')
const gitHubStrategy = require('../strategies/githubStrategy')
const loginLocalStrategy = require('../strategies/loginLocalStrategy')
const registerLocalStrategy = require('../strategies/registerLocalStrategy')

const userModel = require('../models/userModel')

const { generateToken } = require('../utils/jwt')


const initializePassport = () => {
  passport.use('github', gitHubStrategy)
  passport.use('login', loginLocalStrategy)
  passport.use('register', registerLocalStrategy)

  passport.serializeUser((user, done) => {
    console.log({ user })
    console.log('serializeUser')
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    console.log('deserializeUser')
    let user = await userModel.findOne({ _id: id})
    const token = generateToken(user)
    user = user.toObject()
    user.access_token = token
    console.log({ user })
    done(null, user)
  })

}

module.exports = initializePassport