var express = require('express'),
router = express.Router(),
path = require("path");
 
var absPath = path.join(__dirname, "../../app");
 
// route to handle home page
router.get('/', function(req, res) {
 	res.sendFile(absPath + "/index.html");
});
 
module.exports = router;