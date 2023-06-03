var express = require('express');
var router = express.Router();

var parsedJSON = require("../data/animals.json");
// var animals = JSON.stringify(parsedJSON);

// GET /animals
router.get("/:animal_name", function(req, res) {

    console.log(req);
    console.log(res);

    var animal_name = req.params.animal_name;
    res.send(parsedJSON[animal_name]);
});

module.exports = router;