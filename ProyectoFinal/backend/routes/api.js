var express = require('express');
var router = express.Router();
var articuloModel = require('../models/articulo');
var usuariosModel = require('../models/usuarios');
var rolesModel = require('../models/roles');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);


/* GET home page. */
router.get('/home',async function(req, res, next) {
  try{
    var articulos = await articuloModel.getArticulos();

    articulos = articulos.map(articulo => {
      if (articulo.img_id){
        const imagen = cloudinary.image(articulo.img_id, {
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
    console.log(error.message);
    res.render('index', {
      layout: 'layout',
      articulos: [],
      error: true,
      message: error.message
    });
  }
});






module.exports = router;
