var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var loginCtrl  = require('./../controllers/loginController')();

module.exports = function(app){
    app.get('/login', function(req, res){
        res.sendFile('login.html', {
            root: __dirname + '/../views/'
        });
    });
    
    app.post('/loginAttempt', urlencodedParser, function(req, res){
        if(loginCtrl.isLoginValid(req.body.username, req.body.password)){
            res.redirect("/home");
        }
        else{
            res.redirect("/login");
        }
    });
}