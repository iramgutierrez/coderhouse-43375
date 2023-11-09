import mongoose from 'mongoose'
import Assert from 'assert'
import chai from 'chai'

import Users from '../src/dao/Users.dao.js'
import UserModel from '../src/dao/models/User.js'

mongoose.connect('mongodb://localhost:27017/43375_clase40_tests')

const assert = Assert.strict
const expect = chai.expect

describe('Testing Users Dao', () => {
  before(function () {
    this.usersDao = new Users()
   
  })

  beforeEach(async function () {
    await UserModel.remove({ })
  })

  it('El dao deber obtener todos los usuarios en formato de arreglo', async function (){
    const result = await this.usersDao.get()

    //assert.strictEqual(Array.isArray(result), true)
    expect(result).to.be.deep.equal([])
    //assert.strictEqual(result.length, 0)
    expect(result.length).to.be.equal(0)
  })

  it('El dao debe devolver el usuario correcto a partir de su email', async function () {
    const user = {
      first_name: 'iram',
      last_name: 'gutierrez',
      email: 'iram@mail.com',
      password: '123456'
    }
    await UserModel.create(user)

    const result = await this.usersDao.get({ email: user.email })
    assert.strictEqual(Array.isArray(result), true)
    assert.strictEqual(result.length, 1)
    assert.strictEqual(result[0].email, user.email)
    assert.strictEqual(result[0].first_name, user.first_name)
  })

  beforeEach(function () {
    this.timeout(5000)
  })
})