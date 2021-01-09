const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const hashPassword = (password) => {

    return new Promise((resolve,reject) => {

        bcrypt.hash(password, SALT_ROUNDS, (err, encryptedPassword) => {
            if(err) {
                reject(err);
            } else {
                resolve(encryptedPassword);
            }
        })
    });

}

const matchPassword = (password, hash) => {

    return new Promise((resolve ,reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports = {
    hashPassword,
    matchPassword
}