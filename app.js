'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();




app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use('',router);


module.exports = app;