const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conexion = require('./config/configdb');

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
    console.log("cif " + cif);
    var sql = 'insert into empresas(cif) values("?")';
    conexion.query('insert into empresas(cif) values('+cif+')', function (err, success) {
         //if (err) res.status(500).send({ message: `Error al salvar en la base de datos:${err}` });

    res.status(200).send({ message: success });
});

})

app.post('/test', (req, res) => {
    console.log(req.body.cif);
    res.json({ requestBody: req.body })  // <==== req.body will be a parsed JSON object
});



