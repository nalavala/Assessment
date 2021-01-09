const express = require("express");
const router = express.Router();
const auth = require("./../controllers/auth");



router.post("/signup", async (request, res, next) => {

    try {
        const {user : data} = request.body;
        res.json(await auth.signup(request.body));
    }catch(err) {
   
        console.error(err);
        res.json({error : err.message});
    }
});


router.post("/login", async (req, res, next) => {

    try {
    
        res.json(await auth.login(req.body));
    }catch(err) {
        console.error(err);
        res.json({error : err.message});
    }
});

router.get("/:userName", async (req, res, next) => {

    try {
        
        res.json(await auth.getAuthUser(req.params.userName));
    }catch(err) {
        console.error(err);
        res.json({error : err.message});
    }
});
module.exports = router;