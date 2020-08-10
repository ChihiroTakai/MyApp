var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {headertitle: 'header', title: 'Express' });
});

module.exports = router;
