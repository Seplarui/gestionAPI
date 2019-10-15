const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conexion = require('./config/configdb');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
    console.log("Servidor ON - Puerto: 3000");
})


//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
})

app.get('/hola', function (req, res) {
    res.send('Hola Mundo');
})

app.get('/api/empresa', function (req, res) {
    conexion.query('select cif from empresas', function (err, rows) {

        console.log(rows);
        res.send(rows);
    });
})

app.post('/api/empresa', function (req, res) {
    let cif = req.body.cif;
    conexion.query('insert into empresas(empresas.CIF) VALUES (?)', cif, function (err, success) {
        if (err) {
            res.status(500).send({ message: `Error no se ha podido salvar la empresa: ${err}` })
        } else {
            res.status(200).send({ message: success });
        }
    });
});



