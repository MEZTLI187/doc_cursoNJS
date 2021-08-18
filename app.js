const express = require('express');

const app = express();

app.get('/',function(req,res) {res.send('Hola Lunita');});

app.listen(3000);
//se ejecuta con localhost:3000 en el navegador