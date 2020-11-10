const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PostSchema = new Schema({
  content: {
    type: Array,
    required: true
  },
  layout: {
    type: Array
  },
  state: {
    type: String
  },
  publish_on: {
    type: String,
    default: Date.now
  },
  tags: {
    type: String
  },
  source_url: {
    type: String
  },
  sent_to_twitter: {
    type: Boolean
  },
  send_to_facebook: {
    type: Boolean
  },
  is_private: {
    type: Boolean
  },
  slug: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('post', PostSchema);