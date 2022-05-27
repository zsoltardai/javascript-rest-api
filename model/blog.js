const mongoose = require('mongoose');

const Blog = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body:  {
        type: String,
        required: true
    },
    date_published:  {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('blog', Blog);