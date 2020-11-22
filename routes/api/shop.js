const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');
//const User = require('../../models/User');
//const checkObjectId = require('../../middleware/checkObjectId');

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
      check('category', 'Category is required'),
      check('main_image', 'main_image source is required'),
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
        category: req.body.category,
        main_image: req.body.main_image,
        alt_views: req.body.alt_views,
        price: req.body.price
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
      //check('main_image', 'Image source is required'),
      check('price', 'Price is required'),
      check('category', 'Category is required')
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

    const { name, category, main_image, alt_views, price } = req.body;

    try {
      const product = await Product.findOne({ _id: req.body.id });
      if (!product) {
        return res.status(400).json({
          msg: 'Product not found: there is no product matching this id'
        });
      }
        (product.name = name),
        (product.price = price);
        (product.category = category),
       // (product.main_image = main_image),
       // (product.alt_views = alt_views),

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
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    await product.remove();

    res.json('Product removed');
  } catch (err) {

    console.error(err.message);
    
    res.status(500).send('Server Error');
  } 
});

module.exports = router;
