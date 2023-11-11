var express = require('express');
var router = express.Router();
var usuariosModel = require('../models/usuarios');
var rolesModel = require('../models/roles');


router.get('/', function(req,res,next){
    res.render('login', {

    });
});

router.get('/logout', function (req,res,next){
    req.session.destroy();
    res.redirect('/login')
})

router.post('/', async (req,res,next) => {
    try{
        if (!req.session) {
            console.log("req.session undefined")
            req.session = {}; // Inicializa req.session si no está definido
        }
        var usuario = req.body.username;
        var password = req.body.password;
        var idRol
        var data = await usuariosModel.getUserByUserNameAndPassword(usuario,password).then(data => {
            if(data != undefined){
                req.session.id_usuario = data["idUsuario"];
                req.session.username = data["username"];
                idRol = data["idRol"]
                
            }else{
                res.render('login', {
                    error: true
                });
            }
        }).catch(error => {
            console.log("error");
            throw error
        })
        var nombreId = await rolesModel.getRolById(idRol).then(nombreId => {
            req.session.rol = nombreId["nombre"];
        })
        res.redirect('/home');

    } catch (error) {
        console.log(error);
    }
})



module.exports = router;