var updateUserProfileDal = require('./../dal/updateUserProfileDal');

var updateUserProfile = function(userID, userProfile, callback){
    updateUserProfileDal.updateUserProfile(userID, userProfile, callback);
}



module.exports = function(options){
    return {
        updateUserProfile: updateUserProfile
    };
}