// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// sets up port for Heroku otherwise localhost 8080
const PORT = process.env.PORT || 8080;

// Gives us express methods to use
const app = express();

// get live updates in console about status codes
// for HTTP methods from morgan dependency
app.use(morgan('dev'));

// can encode urls using json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Resets default file path to 'public'
app.use(express.static('public'));

// the following methods are deprecated
// https://mongoosejs.com/docs/deprecations.html
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Routes
require('./routes/api');

// connect to PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});