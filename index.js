const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Servidor ON - Puerto: 3000");
})

//CORS
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
})

app.get('/hola', function(req,res) {
    res.send('Hola Mundo');
})

app.post('/api/empresa', function(req,res) {

})
