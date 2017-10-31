var loginDal = require('./../dal/loginDal');

var getUserByCredentials = function(username, password, cb){
    loginDal.getUserByCredentials(username, password, cb)
}

module.exports = function(options){
    return {
        getUserByCredentials: getUserByCredentials
    };
}