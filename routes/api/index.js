const path          = require('path');
const router        = require('express').Router();
const stripeRoutes  = require('./stripe');
const authRoutes    = require('./auth');
const userRoutes    = require('./users');
const shopRoutes    = require('./shop');
const contactRoutes = require('./contact');


router.use('/stripe', stripeRoutes);

router.use('/auth', authRoutes);

router.use('/user', userRoutes);

router.use('/shop', shopRoutes);

router.use('/contact', contactRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
