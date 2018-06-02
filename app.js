// Requires
var express = require('express');
var mongoose = require('mongoose');




// Inicializar variables
var app = express();


// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de Datos puerto 27017: \x1b[33m%s\x1b[0m', 'online');

});


// Rutas
app.get('/', (req, res, next) => {

    res.status(403).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });

});



// Escuchard peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[33m%s\x1b[0m', 'online');
});