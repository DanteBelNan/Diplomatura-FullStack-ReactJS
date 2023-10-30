var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.session);
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.usuario,
    });
});

module.exports = router;