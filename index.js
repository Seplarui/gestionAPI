const app = express();

app.listen(3000, () => {
    console.log("Servidor ON - Puerto: 3000");
})

app.get('/', function(req,res) {
    res.json("Hola Mundo");
})