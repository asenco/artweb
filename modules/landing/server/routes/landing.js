module.exports = function(app){
    app.get('/landing', function(req, res){
        res.sendFile('landing.html', {
            root: __dirname + '/../views/'
        });
    });
}