var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var loginCtrl  = require('./../controllers/loginController')();

var sessions = require('express-session');
var session;

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(sessions({
            secret: 'thisisthesecretkey',
            resave: false,
            saveUninitialized: true
            }));
    
    app.get('/login', function(req, res){
        session = req.session;
        console.log('session is as follows: ' + session);
        console.log('session.uniqueID is as follows: ' + session.uniqueID);
        console.log('session.id is as follows: ' + session.id);
        if(session.uniqueID){
            res.redirect("/home");
        }
        else{
            res.sendFile('login.html', {
            root: __dirname + '/../views/'
            });
        }
        
    });
    
    app.post('/loginAttempt', urlencodedParser, function(req, res){
            loginCtrl.getUserByCredentials(req.body.username, req.body.password, function(err, user){
            console.log(err, user);
            if(!err && user){
                session = req.session;
                session.uniqueID = user._id;
                session.username = user.username;
                console.log('session is as follows: ' + session);
                console.log('session.uniqueID is as follows: ' + session.uniqueID);
                console.log('session.id is as follows: ' + session.id+' name is: '+session.username);
                
                res.redirect("/home");
            }
            else{
                res.redirect("/login");
            }
        })
    });
}