const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors())
const port = 3002;

app.listen(port, '0.0.0.0',() => {
    console.log("Serveur disponible à l'adresse : localhost:"+port)//LOG OK
})