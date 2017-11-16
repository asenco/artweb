var updateUserProfile = function(userID, userProfile, callback){
    
    //check whether the Profile exists in the userProfile Collection or not
     var myCursor = db.collection('userProfile').find({
        userId: userID
    }).toArray(function(err, result){
         if(err)
             console.log(err);
         else {
             console.log('search result is: '+result);
             if (result.length){
                 //update if Profile exists in the userProfile collection
                 db.collection('userProfile').update({
                     userId: userID
                 }, userProfile, callback);
                 
             }
             else{
                 //insert if result is null
                 db.collection('userProfile').insertOne(userProfile, callback);
             }
         }
     });
    
    //insert userProfile is does not exist
    
 
}

module.exports  = {
    updateUserProfile: updateUserProfile
}