const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  alt_views: {
    type: Array
  }
});

module.exports = mongoose.model('image', ImageSchema);