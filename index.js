const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conexion = require('./config/configdb');

app.listen(3000, () => {
    console.log("Servidor ON - Puerto: 3000");
})

app.use(bodyParser.json());
//CORS
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
})

app.get('/hola', function(req,res) {
    res.send('Hola Mundo');
})

app.get('/api/empresa', function(req,res) {
    conexion.query('select cif from empresas', function(err, rows) {

        console.log(rows);
        res.send(rows);
    });

    app.post('/api/empresa/:CIF', function(req,res) {
        conexion.query('', req.params.cif, function(err,rows) {

        })
    })
    

})
