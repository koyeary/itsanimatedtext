 const express   = require('express');
const router    = express.Router();
const stripe = require('stripe')('sk_test_51H5LHsBHBGQzSzD9lnlwfiEngrKrGOJ3rmVQ4GSrtL1IrqNmQyTO4oZQW66EaL2l9lYOFbrzOVHeQizjDTo8w2qz00BgzMQuaS');

// @route    POST api/stripe/create-checkout-session
// @desc     Make a payment
// @access   Public

router.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd"
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    });
  });

/*router.post('/stripe/charge', async (req, res) => {
    try {
        const 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
 router.post('/payments/create', async (req, res) => {
    try {
        const { amount, shipping } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            shipping,
            amount,
            currency: 'usd'
        });

        res.send(paymentIntent.client_secret);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}) 

module.exports = router; */