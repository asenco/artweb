module.exports = function(app){
    app.get('/home', function(req, res){
        res.sendFile('home.html', {
            root: __dirname + '/../views/'
        });
    });
}