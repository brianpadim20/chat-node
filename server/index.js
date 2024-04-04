// const exp = require('constants');
var express = require('express');
var app = express();
var http = require('http'); // Importar el módulo http
var server = http.createServer(app); // Crear un servidor HTTP con Express

var io = require('socket.io')(server); // Inicializar socket.io con el servidor HTTP

app.use(express.static('client'));//Método de express para cargar todos los html estáticos de la carpeta client

app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola mundo desde esta ruta');

});

io.on('connection', function(socket){
    console.log("El cliente con IP: " + socket.handshake.address + " se ha conectado...");

});

server.listen(6677, function(){ // 6677 es el puerto al que se conectará
    console.log('Servidor funcionando correctamente en http://localhost:6677');
});
