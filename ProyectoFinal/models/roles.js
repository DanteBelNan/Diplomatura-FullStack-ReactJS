var pool = require('./bd');

async function getRolById(id){
    try {
        var query = "select * from rol where idRol = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

module.exports = { getRolById }