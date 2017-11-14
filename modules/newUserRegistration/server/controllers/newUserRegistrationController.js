var newUserRegistrationDal = require('./../dal/newUserRegistrationDal');

var addNewUser = function(username, password, cb){
    newUserRegistrationDal.addNewUser(username, password, cb)
}

module.exports = function(options){
    return {
        addNewUser: addNewUser
    };
}