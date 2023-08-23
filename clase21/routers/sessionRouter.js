const { Router } = require('express')
const passport = require('passport')

const sessionRouter = Router()

sessionRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => {

})

sessionRouter.get('/github-callback', passport.authenticate('github', { failureRedirect: '/login'}), async (req, res) => {
  return res.redirect('/profile')
})

module.exports = sessionRouter