let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let UserSchema = require("../models/user");

router.get("/users", (req, res , next) => {
    console.log("user");
UserSchema.find().then((result) => {
    res.json(result);
})
.catch((err)=>{
    next(err);
})
});

router.post("/users", (req, res, next) => {
    console.log("in");
UserSchema.create(req.body).then((result) => {
    res.json(result);
})
.catch((err)=>{
    next(err);
})
});

router.delete("/users/:id",
(req, res, next) => {
UserSchema.findByIdAndRemove(
	req.params.id).then((result) => {
        res.status(200).json({
            msg: result,
        });
    })
    .catch((err)=>{
        next(err);
    })
    
});

module.exports = router;