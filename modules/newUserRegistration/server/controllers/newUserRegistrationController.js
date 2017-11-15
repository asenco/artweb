var newUserRegistrationDal = require('./../dal/newUserRegistrationDal');

var addNewUser = function(user, callback){
    newUserRegistrationDal.addNewUser(user, function(err, result){
        if(err){
            console.log(err + 'Generated at Ctrl');
            callback(err + 'Generated at Ctrl', 0);
        }
        else{
            console.log('Data is inserted in the Collection User in MongoDB, I am in Ctrl');
            console.log('Result value at Ctrl is ' + result);
            callback(null, 2);
        }           

    });
}

var isUsernameAvailable = function(username, callback){
    newUserRegistrationDal.isUsernameAvailable(username, function(err, result){
        if(err){
            console.log(err + 'Generated at Ctrl');
            callback(err + 'Generated at Ctrl', 0);
        }
        else{
            if(result){
                console.log('Found ' + result + ' entries. Username is not available, I am in Ctrl');
                callback(null, result);
            }
            else{
                console.log('Found ' + result + ' entries. Username is available, I am in Ctrl');
                callback(null, result);
            }
            
        }    
    })
}

module.exports = function(options){
    return {
        addNewUser: addNewUser,
        isUsernameAvailable: isUsernameAvailable
    };
}