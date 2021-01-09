const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;



const sign = async (user) => {
    return new Promise((resolve, reject) => {
            jwt.sign({
                user
            }, JWT_SECRET, (err, encoded) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(encoded);
                }
            })
        })
}


const verify = async (token) => {
    return new Promise((resolve, reject) => {

        jwt.verify(token, JWT_SECRET, (err, details) => {
            if(err) {
                return reject(err);
            } else {
                return resolve(details);
            }
        })
    });
}

module.exports = {
    sign,
    verify
}