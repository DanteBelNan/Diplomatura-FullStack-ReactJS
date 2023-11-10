var express = require('express');
var router = express.Router();
var usuariosModel = require('../models/usuarios');


router.get('/', function(req,res,next){
    res.render('login', {
        layout: 'layout',
    });
});

router.get('/logout', function (req,res,next){
    req.session.destroy();
    res.render('login', {
        layout: 'layout',
    });
})

router.post('/', async (req,res,next) => {
    try{
        if (!req.session) {
            console.log("req.session undefined")
            req.session = {}; // Inicializa req.session si no está definido
        }
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserByUserNameAndPassword(usuario,password).then(data => {
            if(data != undefined){
                req.session.id_usuario = data["id_usuario"];
                req.session.username = data["username"];
                res.redirect('/');
            }else{
                res.render('login', {
                    layout: 'layout',
                    error: true
                });
            }
        }).catch(error => {
            console.log("error");
            throw error
        })


    } catch (error) {
        console.log(error);
    }
})



module.exports = router;