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

   // localStorage.setItem('id', 'session.id');
      res.send({id: session.id});

   
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/* router.get('/session-id', async (req, res) => {
  try {
    const result = await stripe.redirectToCheckout({
      id: 'cs_test_a1iQ47iE3EmUUBpeCbm4DG4IRYKvrnDPZba3GO1ekAK5rJlYq6Qil9NmNy'
    })
    res.json('it worked');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); */

module.exports = router;
