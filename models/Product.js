const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  name: {
    required: true,
    type: String
  },
  category: {
    required: true,
    type: String
  },
  main_image: {
    required: true,
    type: String
  },
  alt_views: {
    type: Array
  },
  price: {
    required: true,
    type: Number
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model('product', ProductSchema);
