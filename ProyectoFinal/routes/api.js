var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedades');

router.get('/novedades', async function (req,res, next) {
    let novedades = await.novedades.getNovedades();

    res.json(novedades);
});