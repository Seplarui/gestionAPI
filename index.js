const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Servidor ON - Puerto: 3000");
})

app.get('/hola', function(req,res) {
    res.send("Hola Mundo");
})