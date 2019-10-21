// Requiring Portfolio model
var db = require("../models");
var router = require('express').Router();
var path = require("path");

router.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/websiteEntry.html"));
})

// Root route
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })


// Contact route
router.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  })

// Portfolio route
router.get("/portfolio", function (req, res) {

    db.Portfolio.findAll({}).then(function (result) {
        console.log(result);
        var obj = {
            result: result
        }
        res.render("index", obj);
    })
})

// Post a new website
router.post("/new/website", function(req, res){

    db.Portfolio.create({
        NAME: req.body.name,
        IMAGE: req.body.image,
        DESC: req.body.desc,
        LINK: req.body.link
    }).then(function(result){
        res.json(result);
    })
})

module.exports = router;