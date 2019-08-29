const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Servidor ON - Puerto: 3000 prueba commit nico");
})

app.get('/hola', function(req,res) {
    res.send("Hola Mundo");
})
