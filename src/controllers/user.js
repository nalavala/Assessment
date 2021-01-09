const {fetchUsersDetails,saveUserDetails,getUserDetails,updateUserDetails} = require("./../db/user");

const getUsers = async (page, count, sortBy="quantity") => {
    try {
        const users = await fetchUsersDetails(page, count, sortBy);
        return users;
    } catch(err) {
        throw err;
    }
};

const getUser = async (userName) => {
    try {
        return await getUserDetails(userName)
    } catch(err) {
        throw err;
    }
}

const saveUser = async (user) => {
    try{
        
        return  await saveUserDetails(user);

    } catch(err) {
        throw err;
    }
};
const updateUser = async (user) => {
    try{
        
        return  await updateUserDetails(user);

    } catch(err) {
        throw err;
    }
}
module.exports = {
    saveUser,
    getUsers,
    getUser,
    updateUser,
}