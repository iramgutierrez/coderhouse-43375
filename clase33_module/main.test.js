const { gretting } = require('./main')

test('Mande saludo a Iram', () => {
  expect(gretting('Iram')).toBe('Hola Iram desde el módulo publicado en npm. ¿cómo estás?')
})