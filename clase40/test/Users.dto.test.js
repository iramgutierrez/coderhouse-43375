import Assert from 'assert'
import UserDTO from '../src/dto/User.dto.js'

describe('Testing users dto', function () {
  it('la funcion concatena el nombre y apellido del usuario', function () {
    const user = {
      first_name: 'Iram',
      last_name: 'Gutiérrez',
      role: 'admin',
      email: 'iram@mail.com'
    }

    const userdto = UserDTO.getUserTokenFrom(user)

    Assert.equal(userdto.name, 'Iram Gutiérrez')
  })
})