const con=require('./db.js')

const getallusers=()=>{
const sql='select * from user'
return con.query(sql)
}
const getalllessons=()=>{
    const sql = 'SELECT l.idlessons,l.category,ll.urlvid FROM lessons l JOIN lessons_link ll ON l.idlessons = ll.lessons_idlessons'
    return con.query(sql)
}
const getvideoslessons=()=>{
    const sql="select * from lessons_link"
    return con.query(sql)
}
// const adduser=(newuser)=>{
//     const sql='insert into user set?'
//     con.query(sql,newuser)
// }

const deluser = (userId) => {
    const deleteTestSql = "DELETE FROM test WHERE user_iduser = ?";
    const deleteFavoritSql = "DELETE FROM favorit WHERE user_iduser = ?";
    const deleteLessonsSql = "DELETE FROM lessons WHERE user_iduser = ?";
    const deleteLessonsLinkSql = "DELETE FROM lessons_link WHERE lessons_idlessons IN (SELECT idlessons FROM lessons WHERE user_iduser = ?)";
    const deleteUserSql = "DELETE FROM user WHERE iduser = ?";

       con.query(deleteTestSql, [userId])

         con.query(deleteFavoritSql, [userId])

     con.query(deleteLessonsLinkSql, [userId])

            con.query(deleteLessonsSql, [userId])

         con.query(deleteUserSql, [userId])
      
};

const alltests=()=>{
    const sql='select * from test'
    return con.query(sql)
}
const searchbycategory=(cate)=>{
const sql="select * from lessons where category=?"
return con.query(sql,cate)
}

const updrole=(newrole,id)=>{
    const sql = 'UPDATE user SET role = ? WHERE iduser = ?'
return con.query(sql,[newrole,id])
}


    const updatelesson = (urlv, id) => {
        const sql = 'UPDATE learn.lessons_link SET urlvid=? WHERE lessons_idlessons=?';
        return con.query(sql, [urlv,id]);
    }

    const deletelesson = (lessonId) => {
        const deleteLinksSql = "DELETE FROM lessons_link WHERE lessons_idlessons = ?";
        con.query(deleteLinksSql, [lessonId])
    
            const deleteLessonSql = "DELETE FROM lessons WHERE idlessons = ?";
            con.query(deleteLessonSql, [lessonId])
        
    };

const getoneuser=(username)=>{
const sql='select * from user where name=?'
return con.query(sql,username)
}   



const addlesson=(lesson,link)=>{
    const sqlLesson = "INSERT INTO lessons (category, user_iduser) VALUES (?, ?)";
  const sqlLink = "INSERT INTO lessons_link (urlvid, lessons_idlessons) VALUES (?, LAST_INSERT_ID())";


  con.query(sqlLesson, [lesson.category, lesson.user_iduser])
  con.query(sqlLink, [link.urlvid])
}
module.exports={getallusers,searchbycategory,addlesson,getalllessons,alltests,getvideoslessons,deluser,updrole,updatelesson,deletelesson,getoneuser}