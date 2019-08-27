const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Servidor ON - Puerto: 3000");
})

app.get('/', function(req,res) {
    res.send("Hola Mundo");
})