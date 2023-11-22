var express = require('express');
var router = express.Router();


router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'layout'
    });
});

module.exports = router;