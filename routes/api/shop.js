const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
/* const { check, 
  validationResult } = require('express-validator'); */

const Product = require('../../models/Product');

// @route    GET api/shop/admin
// @desc     Get product in this shop
// @access   Private
router.get('/admin', auth, async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.body.id });

    if (!product) {
      return res
        .status(400)
        .json({ msg: 'Product not found: there is no product matching this id' });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/shop
// @desc     Create a product
// @access   Private
router.post('/admin', auth, async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      image_src: req.body.image_src,
      price: req.body.price,
      description: req.body.description
    });

    const product = await newProduct.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/* router.put('/admin', auth, async (req, res) => {

}) */

// @route    GET api/shop/
// @desc     Get products in this shop
// @access   Public
//router.get('/', (req, res) => res.send('shop route'));

module.exports = router;
