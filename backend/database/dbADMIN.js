const con = require("./db");

const getallusers = () => {
  const sql = "select * from user";
  return con.query(sql);
};
const getalllessons = () => {
  const sql = "select * from lessons";
  return con.query(sql);
};
const getvideoslessons = () => {
  const sql = "select * from lessons_link";
  return con.query(sql);
};
const adduser = (newuser) => {
  const sql = "insert into user set?";
  con.query(sql, newuser);
};
const deluser = (id) => {
  const sql = "DELETE FROM user WHERE iduser=?";
  return con.query(sql, id);
};
const updrole = (newrole, id) => {
  const sql = "UPDATE user SET role = ? WHERE iduser = ?";
  return con.query(sql, [newrole, id]);
};
// const addlesson=(lesson)=>{

// }

const updatelesson = (urlv, id) => {
  const sql = "UPDATE learn.lessons_link SET urlvid=? WHERE idlessons_link=?";
  return con.query(sql, [urlv, id]);
};

const deletelesson = (id) => {
  const sql = "DELETE FROM learn.lessons_link WHERE idlessons_link = ?";
  return con.query(sql, id);
};

const getoneuser = (username) => {
  const sql = "select * from user where name=?";
  return con.query(sql, username);
};
module.exports = {
  getallusers,
  getalllessons,
  getvideoslessons,
  adduser,
  deluser,
  updrole,
  updatelesson,
  deletelesson,
  getoneuser,
};
