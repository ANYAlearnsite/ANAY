const {con} = require('./db')

const getall = () => {
  const sql = 'SELECT l.idlessons,l.category,ll.urlvid FROM `lessons` l JOIN lessons_link ll ON l.idlessons = ll.lessons_idlessons'
  return con.query(sql)
}

const getOne = (idlessons) => {
  const sql = 'SELECT * FROM `lessons` WHERE `idlessons` = ?'
 return con.query(sql,idlessons)
}


const updateU = ([newname, newpwd, iduser]) => {
  const sql = `UPDATE user SET name=?, pwd=? WHERE iduser=?`
  return con.query(sql,[newname, newpwd, iduser]);
}


const favorite= (id)=>{
 const sql=`SELECT * FROM lessons l inner join favorit f on (f.lessons_idlessons=l.idlessons) WHERE f.user_iduser=?`
 return con.query(sql,id)
}

const addfavorit = (iduser, idlessons) => {
  const sql = 'INSERT INTO favorit (user_iduser, lessons_idlessons) VALUES  (?,?)'
  return con.query(sql,[iduser,idlessons]);
};


const deletefavorit = ([iduser,idlessons]) => {
  const sql = 'DELETE FROM favorit WHERE user_iduser = ? AND lessons_idlessons = ?'
  return  con.query(sql,[iduser,idlessons])
}

const updateImage=([image,iduser])=>{
  const sql=`UPDATE user SET image=? WHERE iduser=?`
  return con.query(sql,[image,iduser])
}

const insertscore = ([score,iduser,name])=>{
  const sql = `INSERT INTO test (score,user_iduser,name) VALUES (?,?,?)`
  return con.query(sql,[score,iduser,name])
}


module.exports = {getall,getOne,updateU,favorite,addfavorit,deletefavorit,updateImage,insertscore}
