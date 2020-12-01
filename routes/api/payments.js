const express   = require('express');
const router    = express.Router();
const stripe    = require('stripe')('');

// @route    POST api/payments/create
// @desc     Make a payment
// @access   Public
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