var express = require('express');
var router = express.Router();
var articuloModel = require('../models/articulo');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


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
            res.redirect('/home');

        }
    }catch(error){
        console.log(error);
        res.render('index', {
            layout: 'layout',
            error: true, messageError: 'No se cargo el articulo'
        });
    };
});

router.get('/modificarArticulo/:id',async (req, res, next) => {
    try{
        var id = req.params.id;
        var articulo = await articuloModel.getArticulo(id);
        res.render('articulo/modificar', {
            layout: 'layout', 
            articulo
        });
    }catch(error){
        console.log(error);
        res.render('index', {
            layout: 'layout',
            error: true, messageError: 'El articulo no fue encontrado'
        });
    };
});



router.post('/modificarArticulo/:id',async (req, res, next) => {
    try{
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1"){
            img_id = null;
            borrar_img_vieja = true;
        } else{
            if (req.files && Object.keys(req.files).length > 0){
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            img_id
        }

        await articuloModel.modificarArticulo(obj, req.params.id);
        res.render('articulo/modificar', {
            layout: 'layout', 
            articulo: obj,
            success: true, messageSuccess: 'Articulo modificado exitosamente'
        });
    }catch(error){
        console.log(error);
        res.render('articulo/modificar', {
            layout: 'layout', 
            articulo: obj,
            error: true, messageError: 'No se pudo modificar el articulo'
        });
    }
});

router.post('/eliminarArticulo/:id',async (req, res, next) => {
    try{
        var id = req.params.id;
        let articulo = await articuloModel.getArticulo(id);
        if(articulo.img_id){
            await (destroy(articulo.img_id));
        }
        await articuloModel.deleteArticulo(id);
        res.redirect('/home');
    }catch(error){
        console.log(error);
        res.render('articulo/modificar', {
            layout: 'layout', 
            articulo,
            error: true, messageError: 'No se pudo eliminar el articulo'
        });
    };
});

module.exports = router;