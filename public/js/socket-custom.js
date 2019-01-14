var socket = io();
// Escuchar
socket.on('connect',function(){
    console.log('Conectado al servidor');
});
// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Roberto',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});
//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});