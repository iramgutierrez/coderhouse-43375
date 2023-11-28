const Stripe = require('stripe')

class PaymentService {
  constructor () {
    this.stripe = new Stripe('sk_test_mgXDuY2CUhk3Yi6ZaVkvYbB9')
  }

  createPaymentIntent = async (data) => {
    const paymentIntent = this.stripe.paymentIntents.create(data)
    return paymentIntent
  }
}

module.exports = PaymentService