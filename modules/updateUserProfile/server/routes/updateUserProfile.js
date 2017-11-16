var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var updateUserProfileCtrl  = require('./../controllers/updateUserProfileController')();

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
    
    app.get('/updateUserProfile', function(req, res){
        session = req.session;
        if(session.uniqueID){
            res.sendFile('updateUserProfile.html', {
            root: __dirname + '/../views/'
            });
        }
        else{
            res.redirect("/login");
        }
        
    });
    
    app.post('/updateUserProfile', urlencodedParser, function(req, res){
        session = req.session;
        var userProfile = {
            userId: session.uniqueID,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email
        }
        updateUserProfileCtrl.updateUserProfile(session.uniqueID, userProfile, function(err, result){
                    if(err){
                        console.log(err);
                        res.send('Error Occured while profile update!');
                    }
                    else{
                        res.send('Hi ' + userProfile.name + '!, your profile is updated successfully! '+result);
                    }  
   
        });
        
    });
}

