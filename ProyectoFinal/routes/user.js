var express = require('express');
var router = express.Router();
var usuariosModel = require('../models/usuarios');
var rolesModel = require('../models/roles');


router.get('/', function(req,res,next){
    res.render('login',{
        layout: 'layout',
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
                    layout: 'layout',
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

router.get('/register', async(req,res,next) => {
    res.render('register',{
        layout: 'layout',
    });
})

router.post('/register', async (req,res,next) => {
    try{
        if (!req.session) {
            req.session = {}; // Inicializa req.session si no está definido
        }

        if(req.body.username == "" || req.body.password ==  "" || req.body.password2 == ""){
            res.render('register', {
                layout: 'layout',
                error: true,
                message: "Todos los campos deben de estar llenos"
            });
        }
        if(req.body.password != req.body.password2 ){
            res.render('register', {
                layout: 'layout',
                error: true,
                message: "Las contraseñas deben de ser iguales"
            });
        }
        var usuario = req.body.username;
        var password = req.body.password;
        var password2 = req.body.password2;
        var createdUser = {
            username: req.body.username,
            password: req.body.password,
            idRol: 1 //rol de usuario
          };
        var newUser = await usuariosModel.createUser(createdUser).then(newUser => {
            res.render('login', {
                layout: 'layout',
                register: true,
                RegisterMessage: "Usuario registrado exitosamente"
            })
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/forgotPassword', async(req,res,next) => {
    res.render('forgotPassword',{
        layout: 'layout',
    });
})

router.get('/forgotPassword', async(req,res,next) => {
    res.render('forgotPassword',{
        layout: 'layout',
    });
})

router.post('/forgotPassword', async(req,res,next) => {
    if(req.body.username == ""){
        res.render('forgotPassword', {
            layout: 'layout',
            error: true,
            message: "Todos los campos deben de estar llenos"
        });
    }
    var id = await usuariosModel.getIdByName(req.body.username).then(id => {
        try{
            res.render('forgotPassword',{
                layout: 'layout',
                confirm: true,
                idUsuario: id["idUsuario"]
            });
        }catch(error){
            res.render('forgotPassword', {
                layout: 'layout',
                error: true,
                message: "Ese usuario no existe"
            });
        }
    })
})

router.post('/forgotPassword/confirm', async(req,res,next) => {
    if(req.body.password ==  "" || req.body.password2 == ""){
        res.render('forgotPassword', {
            layout: 'layout',
            error: true,
            message: "Todos los campos deben de estar llenos"
        });
    }
    if(req.body.password != req.body.password2 ){
        res.render('forgotPassword', {
            layout: 'layout',
            error: true,
            message: "Las contraseñas deben de ser iguales"
        });
    }
    var newPassword = await usuariosModel.changePasswordById(req.body.id, req.body.password).then(newPassword => {
        res.render('login', {
            layout: 'layout',
            register: true,
            RegisterMessage: "Contraseña cambiada exitosamente"
        })
    })
})





module.exports = router;