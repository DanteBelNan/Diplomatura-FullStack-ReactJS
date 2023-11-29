var express = require('express');
var router = express.Router();
var articuloModel = require('../models/articulo');
var usuariosModel = require('../models/usuarios');
var rolesModel = require('../models/roles');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);



router.get('/articulo/:id', async (req, res, next) => {
  try{
    var id = req.params.id;
    var articulo = await articuloModel.getArticulo(id);
    var imagen = ''
    if (articulo.img_id){
      imagen = cloudinary.url(articulo.img_id, {
        width: 250,
        height: 250,
        crop: 'fill'
      });
    }
    articulo.imagen = imagen
    res.json(articulo)
  }catch(error){
    res.json(error)
  }
});

router.get('/profile/:id', async (req, res, next) => {
  try{
    var id = req.params.id;
    var usuario = await usuariosModel.getUserById(id);
    res.json(usuario)
  }catch(error){
    res.json(error)
  }
});




router.get('/home',async function(req, res, next) {
  try{
    var articulos = await articuloModel.getArticulos();

    articulos = articulos.map(articulo => {
      if (articulo.img_id){
        const imagen = cloudinary.url(articulo.img_id, {
          width: 100,
          height: 100,
          crop: 'fill'
        });
        return {
            ...articulo,
            imagen
        }
      } else{
        return{
          ...articulo,
          imagen: ''
        }
      }
    })
  
    res.json(articulos)

  }catch(error){
    res.json(error)
  }
});



module.exports = router;
