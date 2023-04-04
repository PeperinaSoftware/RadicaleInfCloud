const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions ={
    origin:'http://0.0.0.0:8080'
}

app.use(cors(corsOptions));

app.use(express.static('.'));

//app.use(express.static(__dirname + './infocloud'));

app.listen('8080', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});