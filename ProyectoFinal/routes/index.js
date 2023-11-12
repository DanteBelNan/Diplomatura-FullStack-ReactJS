var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {idUsuario: req.session.id_usuario});
});

router.post('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
