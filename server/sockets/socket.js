const { io } = require('../server')

io.on('connection', (client)=>{
    //client tiene toda la informacion de quien se conecto
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la app'
    });


    client.on('disconnect', ()=>{
        console.log('Se desconecto un usuario')
    })
    
    // Escuchar el cliente
    //'mensaje' es lo que recibe el servidor de parte del cliente, o sea, es el objeto
    client.on('enviarMensaje', (data, callback) => {
        console.log(data)
        //broadcast es una propiedad del cliente que sirve para enviar la informacion a todos los clientes que esten conectados al servidor
        client.broadcast.emit('enviarMensaje', data)
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'Se recibió el usuario'
        //     });

        // }
        // else{
        //     callback({
        //         resp: 'No se recibió el usuario'
        //     })
        // }
        

    })
})