const service = require('../services/blogs');
const winston = require('winston');
const {error} = require("winston");


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: 'logs/controller.log'
        }),
        new winston.transports.Console()
    ]
});

exports.createBlog = (req, res, next) => {
    service.createBlog(req.body)
        .then(blog => res.status(200).send(blog))
        .catch(error => res.status(500).send(error));
};

exports.readBlog = (req, res, next) => {
  if (req.params.id === undefined) {
      service.readBlogs()
          .then(blogs => res.status(200).send(blogs))
          .catch(error => res.status(500).send(error));
      return;
  }
  service.readBlogById(req.params.id)
      .then(blog => res.status(200).send(blog))
      .catch(error => res.status(500).send(error));
};

exports.updateBlog = (req, res, next) => {
    if (req.params.id === undefined) {
        const response = JSON.stringify({
            status: 400,
            text: 'You did not provide an id!'
        });
        res.status(400).send(response);
    }
    service.updateBlogById(req.params.id, req.body)
        .then(document => res.status(200).send(document))
        .catch(error => res.status(500).send(error));
};

exports.deleteBlog = (req, res, next) => {
    if (req.params.id === undefined) {
        const response = JSON.stringify({
           status: 400,
           text: 'You did not provide an id!'
        });
        res.status(400).send(response);
    }
    service.deleteBlogById(req.params.id)
        .then(blog => res.status(200).send(blog))
        .catch(error => res.status(500).send(error));
};
