const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    GET api/shop/
// @desc     Get all products
// @access   Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/shop/
// @desc     Get product in this shop
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({
        msg: 'Product not found: there is no product matching this id'
      });
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
router.post(
  '/admin',
  [
    auth,
    [
      check('name', 'Name is required'),
      check('url', 'Url source is required'),
      check('price', 'Price is required')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        url: req.body.url,
        description: req.body.description
      });

      const product = await newProduct.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    PUT api/shop
// @desc     Update a product
// @access   Private
router.put(
  '/admin/:id',
  [
    auth,
    [
      check('name', 'Name is required'),
      check('url', 'Image source is required'),
      check('price', 'Price is required')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, url, price, description } = req.body;

    try {
      const product = await Product.findOne({ _id: req.body.id });
      if (!product) {
        return res.status(400).json({
          msg: 'Product not found: there is no product matching this id'
        });
      }
      (product.name = name),
        (product.url = url),
        (product.price = price),
        (product.description = description);

      await product.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/shop
// @desc     Delete a product
// @access   Private
router.delete('/admin/:id', auth, async (req, res) => {
  try {
    await Product.findOneAndRemove({ id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});


module.exports = router;
