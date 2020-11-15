const express = require('express');
//const config = require('config');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Image = require('../../models/Image');
const Product = require('../../models/Product');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    GET api/shop/images
// @desc     Get current users profile
// @access   Public
router.get('/images', async (req, res) => {
  try {
    const image = await Image.findOne({
      product: req.product.id
    }).populate('product', ['name', 'price']);

    if (!image) {
      return res
        .status(400)
        .json({ msg: 'There is no image for this product' });
    }

    res.json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/shop/images
// @desc     Create or update product image
// @access   Private
router.post(
  '/images',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('url', 'Image URL is required').not().isEmpty()
    ]
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Using upsert option (creates new doc if no match is found):
      const newImage = new Image({
        product: req.body.product_id,
        name: req.body.name,
        url: req.body.url
      });

      const image = await newImage.save();

      return res.json(image);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/shop/image
// @desc     Get all images
// @access   Public
router.get('/', async (req, res) => {
  try {
    const images = await Image.find().populate('product', ['name', 'price']);
    res.json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/shop/image/product/:product_id
// @desc     Get image by product ID
// @access   Public
router.get(
  '/product/:product_id',
  checkObjectId('product_id'),
  async ({ params: { product_id } }, res) => {
    try {
      const image = await Profile.findOne({
        product: product_id
      }).populate('product', ['name', 'avatar']);

      if (!image) return res.status(400).json({ msg: 'Image not found' });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

// @route    DELETE api/shop/images
// @desc     Delete product image/s
// @access   Private
router.delete('/images', auth, async (req, res) => {
  try {
    // Remove product images
    await Image.deleteMany({ product: req.product.id });
    // Remove image
    await Image.findOneAndRemove({ product: req.product.id });

    res.json({ msg: 'Product deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/shop/images/:id
// @desc     Update image for a product
// @access   Private
router.put(
  '/images/:id',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('url', 'Image URL is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Using upsert option (creates new doc if no match is found):
      const image = await Image.findOneAndUpdate({
         image: image._id,
         url: image._url
      });

      if (! image._id) {
        return res.status(400).json({
          msg: 'No image matching this id was found'
        });
      }

      return res.json(image);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
