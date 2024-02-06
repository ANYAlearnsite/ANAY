var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "21018965",
  database: "learn"
}).promise();

const singup =([X,Y,Z])=>{
    const sql = 'INSERT INTO user (name, pwd, role) VALUES (?, ?, ?)';
    con.query(sql,[X,Y,Z])
}


const getuser =(x)=>{
    const sql = `SELECT * FROM user WHERE name = ?`
    return con.query(sql,x)
}

const getall = ()=>{
    const sql = `SELECT * FROM user `
    return con.query(sql)
}


module.exports = {
    singup : singup,
    getuser : getuser,
    getall :getall
}