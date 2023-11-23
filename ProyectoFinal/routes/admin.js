var express = require('express');
var router = express.Router();
var articuloModel = require('../models/articulo');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);


router.get('/agregarArticulo', (req, res, next) => {
    res.render('admin/crearArticulo', {
        layout: 'layout'
    });
});

router.post('/agregarArticulo', async(req, res, next) => {
    console.log(req.body)
    try{
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if(req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != ""){
            var obj = {
                titulo:req.body.titulo,
                descripcion:req.body.descripcion,
                precio:req.body.precio,
                img_id
            }
            await articuloModel.createArticulo(obj);
            res.render('index', {
                layout: 'layout', //Aca hay que hacer despues que nos redirija a la pestaña de visualizar un articulo
                success: true, messageSuccess: 'Articulo creado exitosamente'
            });
        }
    }catch(error){
        console.log(error);
        res.render('index', {
            layout: 'layout',
            error: true, messageError: 'No se cargo el articulo'
        });
    };
});

module.exports = router;