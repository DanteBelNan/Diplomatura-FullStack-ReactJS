var express = require('express');
var router = express.Router();
var articuloModel = require('../models/articulo');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);


/* GET home page. */
router.get('/',async function(req, res, next) {
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
  
    res.render('index', {
      layout: 'layout',
      articulos
    });

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

router.post('/', function(req, res, next) {
  res.render('index');
});


router.get('/:id', async (req, res, next) => {
  try{
    var id = req.params.id;
  
    var articulo = await articuloModel.getArticulo(id);
    var imagen = ''
    if (articulo.img_id){
      imagen = cloudinary.image(articulo.img_id, {
        width: 250,
        height: 250,
        crop: 'fill'
      });
    }
    res.render('articulo/ver', {
      layout: 'layout',
      articulo,
      imagen
    });
  }catch(error){
    console.log(error.message);
    res.render('index', {
      layout: 'layout',
      articulo: null,
      error: true,
      message: error.message
    });
  }
});





module.exports = router;
