const mongoose = require('mongoose');
require('dotenv').config();


// eslint-disable-next-line no-unused-vars
const { DB_URI, PORT } = process.env;


mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (() => {
  console.log('connected');
}));
