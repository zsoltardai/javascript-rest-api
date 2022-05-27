# javascript-rest-api

The <b>javascript-rest-api</b> project is a RESTFUL API, built with express, and the usage of a NO-SQL database called
Mongodb.

### Blog model

The Blog model contains six fields including the ```_id``` that is generated on server side.

```
        Blog
---------------------
_id id
title String
excerpt String
author String
body String
date_published Date
```
<small>The Blog model</small>

### The /services folder

The services folder contains the ```blogs.js``` file that contains methods for a basic CRUD to manipulate, read and
delete the documents of the ```blog``` collection.

### The /controller folder

The controller folder contains ```blogs.js``` file, which is respobsible for handling the requests made by a client
application.

### The /routes folder

The routes folder contains the ```blogs.js``` and the ```dto/blogRecordRequestDto.js``` files. The ```blogs.js``` file
is responsible for defining hte endpoints under the ```/blogs``` route Meanwhile the ```dto/blogRecordRequestDto.js```
file is responsible for checking the body of the request, to make sure it contains all the needed fields.

### API endpoints

The application has several endpoints and the files in the routes folder also contain swagger to test the endpoints.

The ```GET /blogs``` endpoint is responsible for requesting all the blogs stored in the database.

The ```GET /blogs/:id``` endpoint can be used to request only one blog by its own ```_id```.

With the ```POST /blogs``` endpoint you can create a new blog document in the database, if all the required
fields are contained in the request body, which are:

- title
- excerpt
- body
- author
- date_published

If any of these missing, the request will return with a ```400``` error code, and the list of the missing fields.

The ```PUT /blogs/:id``` endpoint can be used to update a blog document, by providing the following fields in the
request body:

- title
- excerpt
- body
- author
- date_published

If any of these missing, the request will return with a ```400``` error code, and the list of the missing fields.

The ```DELETE /blogs/:id``` path can be used to delete a single blog document by its ```_id```.
