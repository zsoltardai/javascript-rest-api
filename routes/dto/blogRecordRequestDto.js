const { body } = require('express-validator');

module.exports = [
    body('title', 'Title does not exist.').exists(),
    body('excerpt', 'Excerpt does not exist.').exists(),
    body('author', 'Author does not exist.').exists(),
    body('body', 'Body does not exist.').exists(),
    body('date_published', 'Publish date does not exist.').exists()
];
