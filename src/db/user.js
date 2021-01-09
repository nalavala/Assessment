const UserDetails = require("./../models/User");

const fetchUsersDetails = async (page = 1 ,count = 20 ,  sortBy = "createdBy") => {

    let skip = (page - 1) * count;
    try {
        const usersDetails = await UserDetails.find().select("-_id").skip(skip).limit(count).sort("-createdAt");
        return usersDetails;

    } catch(err) {
        next(err);
    }
}

const saveUserDetails = async (userDetails) => {
    try {
        const savedUser = await new UserDetails(userDetails).save();
        return savedUser._doc;
    } catch(err) {
        throw err;
    }
}


const getUserDetails = async (userName) => {
    try {
        const user = await UserDetails.findOne({userName : userName})
        if(!user) {
            return null;
        }
        return user._doc;
    } catch(err) {
        throw err;
    }
}

const updateUserDetails = async (user) => {

    try {
        const updatedUser = await UserDetails.findOneAndReplace({userName : user.userName}, user,{new : true});
        return updatedUser;
    }catch (err) {
        throw err;
    }
};

module.exports = {
    fetchUsersDetails,
    saveUserDetails,
    getUserDetails,
    updateUserDetails

}