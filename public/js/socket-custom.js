 //se usa var para aumentar la compatibildad con diferentes navegadores web ya que no todos leen el let 
 var socket= io();
 //ON => escucha
 socket.on('connect', function(){
     console.log('Conectado con el servidor')
 });
 socket.on('disconnect', function(){
     console.log('Se perdió la conexion con el servidor')
 });
 // EMIT => envia informacion al servidor inmediatamente después de que se conecta al servidor
 //es necesario estar escuchando este evento en el servidor para poder verlo
 socket.emit('enviarMensaje', {
     usuario:'Athziri',
     mensaje: 'Hola Mundo'
     },
     function(respuesta){
         //respuesta es la respuesta del callback
         console.log('Respuesta del servidor: ', respuesta)
         
     });
 // Escuchar informacion
 // El servidor envio un objeto y el cliente escucho una funcion
 socket.on('enviarMensaje',function(mensaje){
     console.log('Servidor: ', mensaje)
 })