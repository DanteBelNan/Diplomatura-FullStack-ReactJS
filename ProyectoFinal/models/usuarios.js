var pool = require('./bd');
var md5 = require('md5');

async function getUserByUserNameAndPassword(user, password){
    try {
        var query = "select * from usuarios where username = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, password]);
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

module.exports = { getUserByUserNameAndPassword }