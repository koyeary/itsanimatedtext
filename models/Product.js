const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
      },
    name: {
        required: true,
        type: String,
    },
    image_src: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
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