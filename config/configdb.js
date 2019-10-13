'use strict'

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'seplarui',
    password:'seplarui',
    database: 'gestionempresas',
    port:3306
});

module.exports = connection;