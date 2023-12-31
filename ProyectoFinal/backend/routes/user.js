var express = require('express');
var router = express.Router();
var usuariosModel = require('../models/usuarios');
var rolesModel = require('../models/roles');
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a4ed061c5a0221",
      pass: "9eaeabb4c0bc9f"
    }
  });

router.get('/', function(req,res,next){
    res.render('login/login',{
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
        var data = await usuariosModel.getUserByUserNameAndPassword(usuario,password);
        if(data != undefined){
            req.session.id_usuario = data["idUsuario"];
            req.session.username = data["username"];
            req.session.rol = data["rol"]
            let info = await transporter.sendMail({
                from: '"noReplyArticulos" <noReply@articulos.com>',
                to: data["mail"],
                subject: "Inicio de sesión",
                text: "Se ha realizado un inicio de sesión en tu cuenta " + data["username"],
                html: "<h1>Se ha realizado un inicio de sesión en tu cuenta " + data["username"] + " </h1>"
            });
            res.redirect('/home');
        }else{
            res.render('login/login', {
                layout: 'layout',
                error: true
            });
        }
        

    } catch (error) {
        console.log(error);
    }
})

router.get('/register', async(req,res,next) => {
    res.render('login/register',{
        layout: 'layout',
    });
})

router.post('/register', async (req,res,next) => {
    try{
        if (!req.session) {
            req.session = {}; // Inicializa req.session si no está definido
        }

        if(req.body.username == "" || req.body.password ==  "" || req.body.password2 == "" || req.body.email == ""){
            res.render('login/register', {
                layout: 'layout',
                error: true,
                message: "Todos los campos deben de estar llenos"
            });
        }
        if(req.body.password != req.body.password2 ){
            res.render('login/register', {
                layout: 'layout',
                error: true,
                message: "Las contraseñas deben de ser iguales"
            });
        }

        var createdUser = {
            username: req.body.username,
            password: req.body.password,
            mail: req.body.email,
            idRol: 1 //rol de usuario
          };
        var newUser = await usuariosModel.createUser(createdUser).then(newUser => {
            res.render('login/login', {
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
    res.render('login/forgotPassword',{
        layout: 'layout',
    });
})

router.get('/forgotPassword', async(req,res,next) => {
    res.render('login/forgotPassword',{
        layout: 'layout',
    });
})

router.post('/forgotPassword', async(req,res,next) => {
    if(req.body.username == ""){
        res.render('login/forgotPassword', {
            layout: 'layout',
            error: true,
            message: "Todos los campos deben de estar llenos"
        });
    }
    var id = await usuariosModel.getIdByName(req.body.username).then(id => {
        try{
            res.render('login/forgotPassword',{
                layout: 'layout',
                confirm: true,
                idUsuario: id["idUsuario"]
            });
        }catch(error){
            res.render('login/forgotPassword', {
                layout: 'layout',
                error: true,
                message: "Ese usuario no existe"
            });
        }
    })
})

router.post('/forgotPassword/confirm', async(req,res,next) => {
    if(req.body.password ==  "" || req.body.password2 == ""){
        res.render('login/forgotPassword', {
            layout: 'layout',
            error: true,
            message: "Todos los campos deben de estar llenos"
        });
    }
    if(req.body.password != req.body.password2 ){
        res.render('login/forgotPassword', {
            layout: 'layout',
            error: true,
            message: "Las contraseñas deben de ser iguales"
        });
    }
    var newPassword = await usuariosModel.changePasswordById(req.body.id, req.body.password).then(newPassword => {
        res.render('login/login', {
            layout: 'layout',
            register: true,
            RegisterMessage: "Contraseña cambiada exitosamente"
        })
    })
})

router.post('/deleteUser', async(req, res, next) => {
    var id = req.session.id_usuario
    var deleted = await usuariosModel.deleteUser(id).then(deleted => {
        res.redirect('/login/logout')

    })
})





module.exports = router;