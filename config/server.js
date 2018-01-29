/* Import de módulos */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');

/* iniciar o objeto express */
var app = express();

/* Setar variáveis "view ingine" e "views" do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configurar middlewares */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());

/* Efetua o autoload das rotas, modelos e controllers no objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* Exportar app */
module.exports = app;