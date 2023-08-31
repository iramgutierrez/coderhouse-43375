const passport = require('passport')
const passportJWT = require('passport-jwt')

const JWTStrategy = passportJWT.Strategy
const extractJWT = passportJWT.ExtractJwt

const headerExtractor = (req) => {
  console.log(req.headers)
  return req.headers && req.headers['authorization'] && req.headers['authorization'].replace('Bearer ', '')
}

const initializePassport = () => {
  passport.use('jwt', new JWTStrategy({
    jwtFromRequest: extractJWT.fromExtractors([headerExtractor]),
    secretOrKey: 'jwtsecret'
  }, (jwtPayload, done) => {
    console.log({ jwtPayload })
    done(null, jwtPayload.user)
  }))
}

module.exports = initializePassport