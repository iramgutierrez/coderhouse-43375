const { Router } = require('express')

const dictionaryRouter = Router()

const words = {
  'iram uriel': 'Iram Gutiérrez'
}

const dictionaryService = {
  findWord: (word) => {
    return words[word]
  }
}

wordMiddleware = (req, res, next) => {
  console.log(req.params.word)

  return next()
}

dictionaryRouter.param('word', (req, res, next, value) => {
  console.log('wooord')
  const wordFound = dictionaryService.findWord(value)

  if (wordFound) {
    req.word = wordFound
  } else {
    req.word = null
  }

  return next()
})

dictionaryRouter.get('/:word([a-zA-Z%20]+)', (req, res) => {
  return res.send(req.word)
})

dictionaryRouter.get('/:word', (req, res) => {
  return res.send(`Error con la palabra ${req.params.word}`)
})

module.exports = dictionaryRouter