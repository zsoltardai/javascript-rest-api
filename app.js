const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const winston = require('winston');
const log = winston.createLogger({
   level: 'info',
   format: winston.format.json(),
   transports: new winston.transports.Console()
});
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 80;

const uri = process.env.MONGODB_URI;

try {
   mongoose.connect(uri)
} catch(reason){
   log.error({ reason: reason });
   process.exit(1);
}

const app = express();

const blogsRouter = require('./routes/blogs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/blogs', blogsRouter);

app.listen(PORT);
