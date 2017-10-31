var getUserByCredentials = function(username, password, cb){
    db.collection('user').findOne({
        username: username, 
        password: password
    }, cb);
}
module.exports  = {
    getUserByCredentials : getUserByCredentials
}