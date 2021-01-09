const auth = require("./../db/auth-user");
const {hashPassword, matchPassword} = require("./../utils/password")
const jwt = require("./../utils/jwt");
const signup = async (signupData) => {


    try {
        
        // Check for data validity
        if (!signupData.userName) throw Error("user name is black");
        if (!signupData.password) throw Error("password is black");
        signupData.password = await hashPassword(signupData.password);
        signupData.role = "USER";
        return await auth.signup(signupData);

    } catch(err) {
        throw err;
    }
};

const login = async (loginData) => {

    try {
        if (!loginData.userName) throw Error("username is black");
        if (!loginData.password) throw Error("password is black");
        const user  = await auth.getUser(loginData.userName);

        await matchPassword(loginData.password, user.password);


        const token = await jwt.sign({userName : loginData.userName});
        console.log(token)
        return {
            token,
            email : user.email,
            userName : user.userName
        }


    } catch(err) {
        throw err;
    }
}

const getAuthUser = async (userName) => {
    try {
       
        const user  = await auth.getUser(userName);
        return user;

    } catch(err) {
        throw err;
    }
}

module.exports = {
    signup,
    login,
    getAuthUser
}