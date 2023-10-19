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
  var pool = require('../bd');

  res.render('index', { 
    title: `Datos trabajador: `,
    nombre: `Dante`,
    usuario: username,
    logeado: true
   });
});

module.exports = router;
