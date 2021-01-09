const jwt = require('./../utils/jwt');
const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            const loggedInUser = await jwt.verify(token);
            req.user = loggedInUser;
            next();
        } else {
            res.sendStatus(401);
            // throw error
        }
    } catch(err) {
        console.error(err);
        res.sendStatus(401);
    }
};

module.exports = auth;