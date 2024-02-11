var mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "yessine",
  password: "yessine147",
  database: "learn"
}).promise();

const singup =([X,Y,Z,W])=>{
    const sql = 'INSERT INTO user (name, pwd, role,email) VALUES (?, ?, ?, ?)';
    con.query(sql,[X,Y,Z,W])
}

// get user login info 
const getuser =(x)=>{
    const sql = `SELECT * FROM user WHERE email = ?`
    return con.query(sql,x)
}

const getall = ()=>{
    const sql = `SELECT * FROM user `
    return con.query(sql)
}


module.exports = {
    singup : singup,
    getuser : getuser,
    getall :getall,
   
}
module.exports=con
    
 
    
    


