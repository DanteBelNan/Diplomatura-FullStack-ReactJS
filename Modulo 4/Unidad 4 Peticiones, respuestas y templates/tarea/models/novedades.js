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

module.exports = {getNovedades, createNovedad}