var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var newUserRegistrationCtrl  = require('./../controllers/newUserRegistrationController')();

module.exports = function(app){
    app.get('/newUserRegistration', function(req, res){
        res.sendFile('newUserRegistration.html', {
            root: __dirname + '/../views/'
        });
    });
    
    app.post('/addNewUser', urlencodedParser, function(req, res){
        result = newUserRegistrationCtrl.addNewUser(req.body.username, req.body.password, function(err, result){
            
            if(err){
                console.log('Error Occured while inserting!');
                res.send('Error Occured while inserting!');
            }
            else{
                console.log(result);
                res.send('User registered successfully! Now you can login')
            }
            
            
        });
        
    });
}

