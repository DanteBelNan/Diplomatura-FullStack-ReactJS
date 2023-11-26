var pool = require('./bd');
var md5 = require('md5');

async function getUserByUserNameAndPassword(user, password){
    try {
        var query = "select idUsuario,username,idRol from usuarios where username = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, password]);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

async function getUserById(Id){
    try {
        var query = "select u.idUsuario as idUsuario, u.username as username, u.password as password, r.nombre as rol from usuarios as u " + 
        "inner join rol as r on r.idRol = u.idRol " +
        "where idUsuario = ? ";
        var rows = await pool.query(query, Id);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

async function getIdByName(user){
    try {
        var query = "select idUsuario from usuarios where username = ? and idRol = 1 limit 1";
        var rows = await pool.query(query, [user]);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

async function changePasswordById(id, password){
    try {
        var query = "update usuarios set password = ? where idUsuario = ?";
        var rows = await pool.query(query, [password,id]);
        return rows;
    }catch(error){
        console.log(error);
    }
}

async function createUser(obj){
    try{
        var query = "insert into usuarios set ?";
        var rows= await pool.query(query,[obj])
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteUser(id){
    try{
        var query = "delete from usuarios where idUsuario = ?";
        var rows = await pool.query(query, [id]);
        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = { getUserByUserNameAndPassword, createUser, getIdByName, changePasswordById, deleteUser, getUserById}