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
const adduser=(newuser)=>{
    const sql='insert into user set?'
    con.query(sql,newuser)
}
const deluser = (userId) => {
    const sql = `
  
        DELETE FROM learn.user WHERE iduser = ?;
    `;
    return con.query(sql,userId)
   
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
// const addlesson=(lesson)=>{

// }

    const updatelesson = (urlv, id) => {
        const sql = 'UPDATE learn.lessons_link SET urlvid=? WHERE idlessons_link=?';
        return con.query(sql, [urlv,id]);
    }

    const deletelesson = (lessonId) => {
        const sql = `
            DELETE FROM learn.lessons_link WHERE lessons_idlessons = ?;
            DELETE FROM learn.test WHERE lessons_idlessons = ?;
            DELETE FROM learn.lessons WHERE idlessons = ?;
        `;
        return new Promise((resolve, reject) => {
            con.query(sql, [lessonId, lessonId, lessonId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
const getoneuser=(username)=>{
const sql='select * from user where name=?'
return con.query(sql,username)
}   


const addlesson = (lesson, link) => {
    return new Promise((resolve, reject) => {
        con.beginTransaction(err => {
            if (err) {
                reject(err);
                return;
            }

            con.query('INSERT INTO lessons SET ?', lesson, (err, result) => {
                if (err) {
                    con.rollback(() => {
                        reject(err);
                    });
                    return;
                }

                const lessonId = result.insertId;

                link.lessons_idlessons = lessonId; // Set the lessons_idlessons field to the inserted lesson ID

                con.query('INSERT INTO lessons_link SET ?', link, (err, result) => {
                    if (err) {
                        con.rollback(() => {
                            reject(err);
                        });
                        return;
                    }

                    con.commit(err => {
                        if (err) {
                            con.rollback(() => {
                                reject(err);
                            });
                            return;
                        }

                        resolve(result);
                    });
                });
            });
        });
    });
};
module.exports={getallusers,searchbycategory,addlesson,getalllessons,alltests,getvideoslessons,adduser,deluser,updrole,updatelesson,deletelesson,getoneuser}