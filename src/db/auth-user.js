const AuthUser = require("./../models/Auth");
const {saveUserDetails} = require("./../db/user")
const signup = async(signupRequest) => {

    try {
        const user = new AuthUser(signupRequest);
        const response = await user.save();
        await saveUserDetails({userName : signupRequest.userName})
        console.log(response._doc);
        return response._doc;
    } catch(err) {
        throw(err);
    }
};

const getUser = async (name) => {
    try {
        const response = await AuthUser.findOne({userName : name});
        return response._doc;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    signup,
    getUser
}