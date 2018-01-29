module.exports = function(application){
    application.get('/', function(req, res){
        res.send('teste..1..2..3...');
    });
}