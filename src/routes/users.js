const express = require("express");
const router = express.Router();
const {saveUser,getUsers,getUser,updateUser} = require("./../controllers/user")
const auth = require("./../middlewares/auth");

router.get("/query", async (req, res, next) => {
    try {
        let page = parseInt(req.query.page || 1);
        let limit = parseInt(req.query.limit || 20);
        res.json(await getUsers(page, limit));
    } catch(err) {
        throw err;
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const user = await getUser(req.params.id);
        if(!user) {
            res.status(404).json({error : "No user Found"});
            return;
        }
        res.json(user);

    } catch(err) {
        throw err;
    }
})

router.post("/", async (req,res, next) => {

    try {
        const user = await saveUser(req.body);
        res.json(user)
;    } catch(err) {
        throw err;
    }
})

router.put("/:userName", async (req,res, next) => {

    try {
        const user = await updateUser(req.body);
        res.json(user)
;    } catch(err) {
        throw err;
    }
})


module.exports = router;