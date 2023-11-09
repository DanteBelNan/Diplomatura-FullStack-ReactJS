var pool = require('./bd');

async function getNovedades() {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function createNovedad(obj){
    try{
        var query = "insert into novedades set ?";
        var rows= await pool.query(query,[obj])
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteNovedad(id) {
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedad(id){
    var query = "select * from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedad(obj, id) {
    try{
        var query = "update novedades set ? where id = ?"
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }catch(error){
        throw error;
    }
}

module.exports = {getNovedades, createNovedad, deleteNovedad, getNovedad, modificarNovedad}