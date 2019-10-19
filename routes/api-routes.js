// Requiring Portfolio model
var db = require("../models");
var router = require('express').Router();

// module.exports = function (app) {
//   Portfolio route
// router.get("/portfolio", function (req, res) {

//     db.Portfolio.create({
//         NAME: "Train Scheduler",
//         IMAGE: "images/TrainSchedule.gif",
//         DESC: "Train Scheduler application benefits user on showcasing schedules of different train user wishes to view. Usercan add new train at any point to view schedule. Minutes away field and next arrival keeps updating every minute so that user can keeptrack of their train.",
//         LINK: "https://mahi-mani.github.io/TrainScheduler/"
//     }).then(function (result) {
//         console.log("New row created into portfolio table");
//         res.json(result);
//     })
// })

router.get("/portfolio", function (req, res) {

    db.Portfolio.findAll({}).then(function (result) {
        console.log(result);
        var obj = {
            result: result
        }
        res.render("index", obj);
    })
})

module.exports = router;