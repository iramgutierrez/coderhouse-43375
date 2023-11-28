const { Router } = require('express')
const PaymentService = require('../services/payments')

const router = Router()

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 }
]

router.post('/payment-intents', async (req, res) => {
  const productRequested = products.find(product => product.id === parseInt(req.query.id))

  if (!productRequested) {
    return res.status(404).send({
      status: 'error',
      error: 'Product not found'
    })
  }

  const paymentIntentInfo = {
    amount: productRequested.price,
    currency: 'usd',
    metadata: {
      userId: 'coderhouse43375',
      orderDetails: JSON.stringify({
        [productRequested.name]: 2
      },null, '\t'),
      address: JSON.stringify({
        street: 'calle de prueba',
        postalCode: '12345',
        externalNumber: '123456'
      },null, '\t')
    }
  }

  const service = new PaymentService()
  const result = await service.createPaymentIntent(paymentIntentInfo)

  console.log(result)

  return res.send({
    status: 'success',
    payload: result
  })
})

module.exports = router