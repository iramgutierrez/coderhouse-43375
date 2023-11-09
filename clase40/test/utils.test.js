import Assert from 'assert'

import { createHash, passwordValidation } from '../src/utils/index.js'

describe('Testing de password', function () {
  it ('la funcion debe devolver un hash distinto a la contraseña original', async function () {
    const password = 'qwerty'
    const passwordHashed = await createHash(password)

    Assert.notEqual(password, passwordHashed)
  })

  it('la funcion devuelve true si el hash ya la contraseña original coinciden', async function () {
    const user = {
      password: 'qwerty'
    }

    const passwordHashed = await createHash(user.password)
    const validPassword = await passwordValidation(user, passwordHashed)

    Assert.ok(validPassword)


  })
})