const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Image = require('../../models/Image');
/* const Product = require('../../models/Product');
const checkObjectId = require('../../middleware/checkObjectId'); */

// @route    GET api/shop/images/:id
// @desc     Get image by id
// @access   Public
router.get('/shop/images/:id', async (req, res) => {
  try {
    const image = await Image.findOne({
      image: req.image.id
    });

    if (!image) return res.status(400).json({ msg: 'Image not found' });

    return res.json(image);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server error' });
  }
});

// @route    GET api/shop/images
// @desc     Get all images
// @access   Public

// @route    GET api/shop/images/alt
// @desc     Get all alternate images
// @access   Public

// @route    GET api/shop/images/alt/:id
// @desc     Get alt image by id
// @access   Public

// @route    POST api/images
// @desc     Post image to image api
// @access   Private

module.exports = router;
