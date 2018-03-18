var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
db.Burger.findAll({}).then(function(data){
  var hbsObject = { burgers: data };
  res.render("index", hbsObject);
  })
});


router.post("/burgers/create", function(req, res) {

  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(result){
    console.log(result);
    res.redirect("/");
  })
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.body.burger_id
    }
  }).then(function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
