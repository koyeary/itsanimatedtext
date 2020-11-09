const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
    id: {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    body_html: {
        required: true,
        type: String
    },
    image_src: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now
      },
    updated_at: {
        type: Date,
        default: Date.now
    }
    });

module.exports = mongoose.model('product', ProductSchema);