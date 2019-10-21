var path = require("path");
var router = require('express').Router();

// Root route
router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;