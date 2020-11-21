const express = require('express');
const router = express.Router();
const multer = require('multer');
//const auth = require('../../middleware/auth');
//const config = require('config');
//const { check, validationResult } = require('express-validator');

const Image = require('../../models/Image');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'shop_images/');
    },
    fileName: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        //file rejected
        cb(null, false);
    }
}

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});



// @route    POST api/uploads
// @desc     Upload one image file
// @access   Private
router.post(
  '/',
/*   check('file', 'Filename is required').not().isEmpty(),
  auth, */
  upload.single('image',
  async (req, res) => {
    try {
       const newImage = new Image({
           imageName: req.body.imageName,
           imageData: req.file.path
       });

       const image = await newImage.save();

       res.json(image);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
));

module.exports = router;

// @route    POST api/uploads
// @desc     Upload multiple image files
// @access   Private
/* router.post('/', auth, upload.array('product'), async (req, res, next) => {
  try {
  } catch (err) {}
});
 */