const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number
    },
    url: {
        required: true,
        type: String
    },
    description: {
        type: String
      },
    last_updated: {
        type: Date,
        default: Date.now
    }
    });

module.exports = Product = mongoose.model('product', ProductSchema);