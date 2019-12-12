const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
require('dotenv').config();

// eslint-disable-next-line no-unused-vars
const { DB_URI, PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());

app.use('/', router);

app.listen(PORT);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (() => {
  console.log('connected');
}));
