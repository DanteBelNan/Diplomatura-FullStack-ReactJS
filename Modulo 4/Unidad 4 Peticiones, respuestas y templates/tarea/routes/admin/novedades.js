var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        username: req.session.username,
    });
});

module.exports = router;