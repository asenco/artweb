var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var newUserRegistrationCtrl  = require('./../controllers/newUserRegistrationController')();

module.exports = function(app){
    app.get('/newUserRegistration', function(req, res){
        res.sendFile('newUserRegistration.html', {
            root: __dirname + '/../views/'
        });
    });
    
    app.post('/addUser', urlencodedParser, function(req, res){
        var user = {
            username: req.body.username,
            password: req.body.password
        }
        newUserRegistrationCtrl.addNewUser(user, function(err, result){
                    if(err){
                        console.log(err + 'Generated at invoke level');
                        res.send('Error Occured while inserting!');
                    }
                    else{
                        console.log('Data is inserted in the Collection User in MongoDB, I am at invoke level');
                        console.log('Result value at invoke level is ' + result);
                        res.send(user.username + ' User registered successfully! Now you can login');
                    }  
   
        });
        
    });
    
    app.post('/checkAvailability', urlencodedParser, function(req, res){
       newUserRegistrationCtrl.isUsernameAvailable(req.body.username, function(err, result){
           if(err){
                console.log('Error Occured while checking! at invoke');
                res.send('Error Occured while checking! at invoke');
            }
            else{
                if(result){
                    console.log('Found ' + result + 'entries. Username is not available, I am at invoke');
                    res.send('Not Available');
                    //res.body.lblAvailability.text = 'Not available!';
                }
                else{
                    console.log('Found ' + result + 'entries. Username is available, I am at invoke');
                    res.send('Available');
                    //res.body.lblAvailability.text = 'Available!';
                }
                
            }
       });
    });
}

