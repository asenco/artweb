var addNewUser = function(user, pass, cb){
    db.collection('user').insert({
        username: user,
        password: pass
    }, cb);
}
module.exports  = {
    addNewUser: addNewUser
}