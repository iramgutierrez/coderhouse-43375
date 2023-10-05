const generateUserErrorInfo = (user) => {
  return `
    Una o mas de las siguientes propiedades es incorrecta:
    * first_name: Debe ser tipo String, se recibio: ${user.first_name}
    * last_name: Debe ser tipo String, se recibio: ${user.last_name}
    * email: Debe ser tipo String, se recibio: ${user.email}
  `
}

module.exports = generateUserErrorInfo