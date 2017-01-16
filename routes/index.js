var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	console.log("load main page");
  res.render('index', { title: 'UI5' });
});

module.exports = router;
