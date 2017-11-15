var addNewUser = function(user, callback){
    
    db.collection('user').insertOne(user, function(err, result){
        if(err){
            console.log('This is the error Message! Generated at DAL');
            callback('This is the error Message! Generated at DAL', 0)
        }
        else{
            console.log('Data is inserted in the Collection User in MongoDB, I am in DAL');
            console.log(result);
            callback(null, 1);
        }

    });
 
}

var isUsernameAvailable = function(username, callback){
    var myCursor = db.collection('user').find({
        username: username
    }).toArray(function(err, result){
        if(err){
            callback('error occured at DAL', 0);
        }
        else{
            console.log(result);
            console.log('length of array is ' + result.length);
            callback(null, result.length);
        }
        
  });
}

module.exports  = {
    addNewUser: addNewUser,
    isUsernameAvailable: isUsernameAvailable
}