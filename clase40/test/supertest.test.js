import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('Testing adoptme', function () {
  describe('Test de mascotas', function () {
    it('el endpoint POST /api/pets debe crear una mascota', async function () {
      const pet = {
        name: 'patitas',
        specie: 'pez',
        birthDate: '01-12-2022'
      }

      const {
        statusCode,
        ok,
        _body
      } = await requester.post('/api/pets').send(pet)

      expect(statusCode).to.be.equal(200)
      expect(_body.status).to.be.equal('success')
      expect(_body.payload).to.have.property('_id')
      expect(_body.payload.adopted).to.be.equal(false)
    })
  })

  describe('test avanzado', function () {
    let cookie
    const user = {
      first_name: 'Super',
      last_name: 'Test',
      email: `supertest_${ (new Date()).getTime() }@mail.com`,
      password: '123'
    }

    it('debe registrar correctamente al usuario', async function () {
      const { _body } = await requester.post('/api/sessions/register').send(user)

      expect(_body.payload).to.be.ok
    })

    it('debe loguear correctamente al usuario recién creado y devolver una cookie', async function () {
      const { headers } = await requester.post('/api/sessions/login').send({
        email: user.email,
        password: user.password
      })

      const cookieResult = headers['set-cookie'][0]
      cookie = {
        name: cookieResult.split('=')[0],
        value: cookieResult.split('=')[1].replace('; Max-Age', '')
      }

      expect(cookie.name).to.be.ok.and.eql('coderCookie')
      expect(cookie.value).to.be.ok
    })

    it('debe enviar la cookie que contiene el usuario y obtener el payload', async function () {
      const { _body, statusCode, ok } = await requester.get('/api/sessions/current').set('Cookie', [
        `${cookie.name}=${cookie.value}`
      ])

      expect(statusCode).to.be.equal(200)
      expect(_body.status).to.be.equal('success')
      expect(_body.payload.email).to.be.equal(user.email)
    })
  })
})