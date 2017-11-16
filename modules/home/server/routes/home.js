var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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
    
    app.get('/home', function(req, res){
        session = req.session;
        console.log('session is as follows: ' + session);
        console.log('session.uniqueID is as follows: ' + session.uniqueID);
        console.log('session.id is as follows: ' + session.id);
        if(session.uniqueID){
            res.sendFile('home.html', {
            root: __dirname + '/../views/'
            });
        }
        else{
            res.redirect("/login");
        }
    });
}