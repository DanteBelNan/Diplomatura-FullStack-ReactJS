var pool = require('./bd');

async function getArticulo(id){
    try {
        var query = "select * from articulo where id = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

async function getArticulos(){
    try {
        var query = "select * from articulo";
        var rows = await pool.query(query);
        if(rows == null){
            throw new Error("No se encontraron articulos")
        }
        return rows;
    }catch(error){
        console.log(error);
    }
}

async function createArticulo(obj){
    try{
        var query = "insert into articulo set ?";
        var rows = await pool.query(query,[obj]);
        return rows[0];
    }catch(error){
        throw error;
    }
}

async function deleteArticulo(id) {
    var query = "delete from articulo where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function modificarArticulo(obj, id) {
    try{
        var query = "update articulo set ? where id = ?"
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }catch(error){
        throw error;
    }
}

module.exports = { getArticulo, getArticulos, createArticulo, deleteArticulo, modificarArticulo}