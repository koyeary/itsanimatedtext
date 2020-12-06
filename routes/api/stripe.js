const router = require('express').Router();
const stripe = require('stripe')(
  'sk_test_51H5LHsBHBGQzSzD9lnlwfiEngrKrGOJ3rmVQ4GSrtL1IrqNmQyTO4oZQW66EaL2l9lYOFbrzOVHeQizjDTo8w2qz00BgzMQuaS'
);

// @route    POST api/stripe/create-payment-intent
// @desc     Make a payment
// @access   Public
router.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd'
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

// @route    POST api/stripe/create-checkout-session
// @desc     Check out cart
// @access   Public
router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: req.body.method,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: req.body.product
            },
            unit_amount: 2000
          },
          quantity: req.body.quantity
        }
      ],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel'
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
/* // @route    POST api/stripe/create-checkout-session
// @desc     Check out cart
// @access   Public
router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });
  
    res.json({ id: session.id });
  }); */

module.exports = router;
