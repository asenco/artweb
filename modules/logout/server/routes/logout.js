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
    
    app.get('/logout', function(req, res){
        session = req.session;
        console.log('before destroy, session is as follows: ' + session);
        console.log('before destroy, session.id is as follows: ' + session.id);
        console.log('before destroy, session.uniqueID is as follows: ' + session.uniqueID+' name is: '+session.username);
        if(session.uniqueID){
            req.session.destroy(function(error){
                if(error)
                    console.log(error);
            });
            console.log('after destroy, session is as follows: ' + session);
            console.log('after destroy, session.id is as follows: ' + session.id);
            console.log('after destroy, session.uniqueID is as follows: ' + session.uniqueID);
            res.sendFile('logout.html', {
            root: __dirname + '/../views/'
            });
        }
        else{
            res.send('you are already logged out');
        }
        
    });
}