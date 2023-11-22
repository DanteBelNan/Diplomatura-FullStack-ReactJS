var pool = require('./bd');

async function getArticulo(id){
    try {
        var query = "select * from articulo where idArticulo = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

async function getArticulos(){
    try {
        var query = "select * from articulo";
        var rows = await pool.query(query, [id]);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

module.exports = { getArticulo, getArticulos }