/* Importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar porta para escuta */
app.listen(3000, function(){
    console.log('Servidor online!!');
});