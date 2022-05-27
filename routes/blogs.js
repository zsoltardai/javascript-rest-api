const express = require('express');
const router = express.Router();
const blogsController = require('../controller/blogs');
const blogRequestDto = require('./dto/blogRecordRequestDto');

/**
 * @swagger
 * /blogs:
 *  get:
 *      summary: returns all the blogs stored in the database
 *      responses:
 *          200:
 *              description: list of issues
 */
router.get('/', blogsController.readBlog);


/**
 * @swagger
 * /blogs/{id}:
 *      get:
 *          summary: returns a blog by its id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single issue object
 *
 */
router.get('/:id', blogsController.readBlog);

/**
 * @swagger
 * /blogs:
 *  post:
 *      summary: creates a new blog document
 *      requestBody:
 *        content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   required: true
 *                   properties:
 *                      title:
 *                          type: string
 *                          example: Blog
 *                      author:
 *                          type: string,
 *                          example: Jhon Doe
 *                      date_published:
 *                          type: date
 *                          example: 2022-01-09
 *                      excerpt:
 *                          type: string
 *                          example: Ullamcorper sit amet risus nullam eget felis eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.
 *                      body:
 *                          type: string
 *                          example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Eu non diam phasellus vestibulum lorem. In aliquam sem fringilla ut morbi tincidunt augue. Mauris rhoncus aenean vel elit. Laoreet id donec ultrices tincidunt arcu non sodales neque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.
 *      responses:
 *          200:
 *              description: success
 *          400:
 *              description: problem
 */
router.post('/', blogRequestDto, blogsController.createBlog);

/**
 * @swagger
 * /blogs/{id}:
 *  put:
 *      summary: updates a blog document by id
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *              required: true
 *      requestBody:
 *        content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   required: true
 *                   properties:
 *                      title:
 *                          type: string
 *                          example: Blog
 *                      excerpt:
 *                          type: string
 *                          example: Ullamcorper sit amet risus nullam eget felis eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.
 *                      body:
 *                          type: string
 *                          example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Eu non diam phasellus vestibulum lorem. In aliquam sem fringilla ut morbi tincidunt augue. Mauris rhoncus aenean vel elit. Laoreet id donec ultrices tincidunt arcu non sodales neque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.
 *      responses:
 *          200:
 *              description: success
 *          400:
 *              description: problem
 */
router.put('/:id', blogsController.updateBlog);

/**
 * @swagger
 * /blogs/{id}:
 *      delete:
 *          summary: deletes a blog by its id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: failed
 *
 */
router.delete('/:id', blogsController.deleteBlog);


module.exports = router;