/* Importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar porta para escuta */
var server = app.listen(3000, function(){
    console.log('Servidor online!!');
});

/* configura o servidor para usar o protocolo
websocket na mesma porta do http */
var io = require('socket.io').listen(server);
app.set('io', io);

/* cria conecção websocket */
io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor', function(dados){
        socket.emit('msgParaCliente', {
            apelido: dados.apelido,
            mensagem: dados.mensagem
        });

        socket.broadcast.emit('msgParaCliente', {
            apelido: dados.apelido,
            mensagem: dados.mensagem
        });
    });
});