let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let CompanySchema = require("../models/company");

router.get("/companies", (req, res , next) => {
    console.log("company");
CompanySchema.find().then((result) => {
    res.json(result);
})
.catch((err)=>{
    next(err);
})
});



module.exports = router;