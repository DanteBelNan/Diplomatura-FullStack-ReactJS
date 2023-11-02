var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedades');

router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        layout: 'admin/layout',
        username: req.session.username,
        novedades
    });
});

module.exports = router;