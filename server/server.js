const express = require('express');
const socketIO =require('socket.io')
const http =require('http'); // Ya viene instalado de node y nos sirve para levantar un servidor

const path = require('path');
const { on } = require('process');
const app = express();
let server = http.createServer(app);// asi creamos el servidor
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// IO = esta es la comunicacion del backend
//se pone como modulo para poder exportarlo a otros archivos
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);


});