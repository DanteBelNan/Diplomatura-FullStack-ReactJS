var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express con Node',
    nombre: 'Dante Beltrán'
   });
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  res.render('index', { 
    title: 'Express con Node',
    nombre: 'Dante Beltrán',
    usuario: username,
    logeado: true
   });
});

module.exports = router;
