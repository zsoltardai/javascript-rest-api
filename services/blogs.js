const Blog = require('../model/blog');
const winston = require('winston');


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
      new winston.transports.File({
        level: 'info',
        filename: 'logs/service.log'
      }),
      new winston.transports.Console()
  ]
});

const createBlog = (blog) => {
  return new Promise((resolve, reject) => {
    blog = filterFields(blog);
    Blog.create({ ...blog })
      .then((document) => resolve(document))
      .catch((error) => reject(error));
  });
};

const readBlogs = () => {
  return new Promise((resolve, reject) => {
    Blog.find()
      .then(documents => resolve(documents))
      .catch(error => reject(error));
  });
};

const readBlogById = (id) => {
  return new Promise((resolve, reject) => {
    Blog.findById(id)
      .then(document => resolve(document))
      .catch(error => reject(error));
  });
};

const updateBlogById = (id, blog) => {
  return new Promise((resolve, reject) => {
    blog = filterFields(blog);
    Blog.findOneAndUpdate({ _id: id }, { ...blog })
        .then(document => resolve(document))
        .catch(error => reject(error));
  });
};

const deleteBlogById = (id) => {
  return new Promise((resolve, reject) => {
    Blog.deleteOne({ _id: id })
        .then(document => resolve(document))
        .catch(error => reject(error));
  });
};

const filterFields = (blog) => {
  const fieldsExist = ['title', 'author', 'excerpt', 'body', 'date_published'];
  Object.keys(blog).forEach((key) => {
    if (!fieldsExist.includes(key)) {
      delete blog[key];
    }
  });
  return blog;
};

module.exports = {
  createBlog: createBlog,
  readBlogs: readBlogs,
  readBlogById: readBlogById,
  updateBlogById: updateBlogById,
  deleteBlogById: deleteBlogById
};
