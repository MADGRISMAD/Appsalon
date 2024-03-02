const express = require('express');

//confirgurar app

const app = express();


//definr ruta

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

//definir puerto

//arrancar la app