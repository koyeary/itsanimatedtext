const express = require('express');
const router = express.Router();

const Product = require('../../models/Product');
// @route    POST api/shop
// @desc     Create a product
// @access   Private
router.post(
  '/',
  async (req, res) => {

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
  }
);

module.exports = router;