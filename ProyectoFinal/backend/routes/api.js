var express = require('express');
var router = express.Router();
var articuloModel = require('../models/articulo');
var usuariosModel = require('../models/usuarios');
var rolesModel = require('../models/roles');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a4ed061c5a0221",
      pass: "9eaeabb4c0bc9f"
    }
  });



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

router.post('/login', async (req,res,next) => {
      try{
        const usuario = req.body.username;
        const password = req.body.password;

        var data = await usuariosModel.getUserByUserNameAndPassword(usuario,password)
          if(data != undefined){
              let info = await transporter.sendMail({
                from: '"noReplyArticulos" <noReply@articulos.com>',
                to: data["mail"],
                subject: "Inicio de sesión",
                text: "Se ha realizado un inicio de sesión en tu cuenta " + data["username"],
                html: "<h1>Se ha realizado un inicio de sesión en tu cuenta " + data["username"] + " </h1>"
            });
              res.json({ success: true, redirectTo: '/home', user: data });  
          }else{
            res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
          }
      }catch(error){
        console.log(error)
        res.status(500).json({ success: false, message: error });
      }

})


module.exports = router;
